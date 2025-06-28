# Gemini CLI 活用ガイド

このドキュメントは、Gemini CLIエージェントと効果的に連携し、`nextjs-swgoh` プロジェクトでの開発作業を効率化するためのガイドです。

## 1. はじめに

Gemini CLIエージェントは、ファイル操作、コードの読み書き、シェルコマンドの実行、Web検索など、様々な開発タスクを支援します。このガイドを活用し、エージェントの能力を最大限に引き出してください。

## 2. 基本的な使い方

### 2.1. ファイルの読み書き

*   **ファイルの読み込み**: `read_file` コマンドを使用します。
    ```
    read_file for absolute_path '/path/to/your/file.txt'
    ```
*   **ファイルの書き込み**: `write_file` コマンドを使用します。
    ```
    write_file for file_path '/path/to/your/file.txt' content='Your content here.'
    ```
*   **ファイル内容の置換**: `replace` コマンドを使用します。
    ```
    replace for file_path '/path/to/your/file.txt' old_string='古い文字列' new_string='新しい文字列'
    ```

### 2.2. ファイルの検索

*   **ファイル名の検索 (glob)**: 特定のパターンに一致するファイルを検索します。
    ```
    glob for pattern 'src/**/*.ts'
    ```
*   **ファイル内容の検索 (search_file_content)**: ファイルの内容から正規表現で検索します。
    ```
    search_file_content for pattern 'yourFunction' include='*.js'
    ```

### 2.3. シェルコマンドの実行

`run_shell_command` コマンドを使用します。ファイルシステムを変更する可能性のあるコマンドを実行する際は、エージェントがその目的と影響を説明します。

```
run_shell_command for command 'npm install'
```

### 2.4. Web検索

`google_web_search` コマンドを使用します。

```
google_web_search for query 'Next.js data fetching'
```

## 3. エージェントとの効果的なやり取り

*   **明確な指示**: 何を達成したいのか、具体的に指示してください。曖昧な指示は、エージェントが意図しない行動をとる原因となります。
*   **コンテキストの提供**: 関連するファイルパス、コードスニペット、エラーメッセージなど、タスクを理解するために必要な情報を提供してください。
*   **確認とフィードバック**: エージェントが提案する計画や実行結果に対して、積極的に確認とフィードバックを行ってください。
*   **安全に関する注意**: エージェントは安全性を重視しますが、特にファイルシステムを変更する操作については、その説明をよく確認してください。

## 4. プロジェクト固有の考慮事項

### 4.1. キャラクターデータの管理

*   **データファイル**: キャラクターデータは `src/data/characters.ts` で管理されています。
*   **画像ファイル**: キャラクターの画像は `public/charui/` ディレクトリに `tex.charui_[character_base_id].png` の形式で保存されています。
*   **データ追加時の注意**: 新しいキャラクターを追加する際は、`src/data/characters.ts` に適切な `name`, `character_base_id`, `property`, `src`, `abbreviation`, `skill`, `url` を設定してください。`property` や `skill` に新しい値が必要な場合は、`src/features/characterlist/constants/property.ts` や `src/features/characterlist/constants/skillEffect.ts` の更新も検討してください。

### 4.2. テスト

現在のプロジェクトには、Jestのテストファイルが不足しています。機能追加や変更を行う際は、可能な限りテストを追加し、品質を維持することをお勧めします。

## 5. 困った時の対処法

*   **ヘルプ**: `/help` コマンドで、エージェントの利用可能なコマンドと簡単な説明を表示できます。
*   **バグ報告**: `/bug` コマンドで、エージェントの動作に関するバグやフィードバックを報告できます。

このガイドが、あなたの開発作業の一助となれば幸いです。
