"use client";

import { useState, useRef, useEffect } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AdvisorChatProps {
  allycode: string;
  mode: "rote" | "tw" | "gac";
  purpose: string | null;
  initialMessage: string;
  initialHistory: ChatMessage[];
}

export default function AdvisorChat({
  allycode,
  mode,
  purpose,
  initialMessage,
  initialHistory,
}: AdvisorChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialHistory);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 初回メッセージを表示用に追加（既にhistoryに含まれていない場合）
  const displayMessages = messages;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayMessages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError(null);

    const newHistory: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/advice/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          allycode,
          mode,
          purpose,
          message: text,
          // history は今回のユーザーメッセージを除いた過去履歴
          history: messages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "エラーが発生しました");
        // ユーザーメッセージは残す（再送できるように）
        return;
      }

      setMessages([
        ...newHistory,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setError("通信エラーが発生しました。しばらくしてから再試行してください。");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="bg-stone-800 rounded-lg border border-stone-600 flex flex-col h-[calc(100dvh-200px)] min-h-[300px] max-h-[600px]">
      {/* チャット履歴 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {displayMessages.length === 0 && (
          <p className="text-stone-400 text-center text-sm mt-8">
            チャットを開始してください
          </p>
        )}
        {displayMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-amber-700 text-white"
                  : "bg-stone-700 text-stone-100 border border-stone-600"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="text-xs text-amber-400 mb-1 font-semibold">
                  AI アドバイザー
                </div>
              )}
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-stone-700 border border-stone-600 px-4 py-3 rounded-lg">
              <div className="text-xs text-amber-400 mb-1 font-semibold">
                AI アドバイザー
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-600 text-red-300 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* 入力欄 */}
      <div className="border-t border-stone-600 p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="質問や追加でアドバイスが欲しいことを入力..."
            disabled={loading}
            className="flex-1 px-4 py-2 bg-stone-700 border border-stone-500 rounded text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-semibold rounded transition-colors"
          >
            送信
          </button>
        </form>
        <p className="text-xs text-stone-500 mt-2">
          AIの回答は参考情報です。実際のゲームプレイはご自身の判断で行ってください。
        </p>
      </div>
    </div>
  );
}
