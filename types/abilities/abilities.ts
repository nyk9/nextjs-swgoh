export type Abilities = {
    ability_type: "アルティメットスキル" | "通常スキル" | "特殊スキル" | "リーダースキル" | "ユニークスキル" | "付与スキル",
    cooldown?: number,
    name_jp: string,
    name_eng: string,
    image: string,
    description_jp: string,
    is_omega: boolean,
    is_zeta: boolean,
    is_omicron: boolean
};
