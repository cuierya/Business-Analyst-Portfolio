# Controlled review-tag taxonomy

## Purpose

Use this as the starting dictionary. Keep labels canonical within a project, merge semantic synonyms, and expand only for a genuinely new meaning with a distinct action.

## Canonical issue and reason labels

| 一级问题类型 | 推荐二级具体原因 | 说明 |
|---|---|---|
| 产品功效 | 清洁/去污效果不佳 | 没效果、效果弱、无变化、污渍未去除；非清洁类项目可替换为一个领域专用的“核心功能效果不佳”，但不要同时保留两个同义标签 |
| 气味体验 | 无味/气味过淡 | 无味、几乎闻不到、强度太弱 |
| 气味体验 | 留香不持久 | 开始有味但很快消失、洗后或短时间后无味 |
| 气味体验 | 气味过浓 | 过强、压迫感强；若引起身体不适，同时标记安全与刺激 |
| 气味体验 | 气味难闻 | 难闻、恶心、化学味、霉味等明确负面气味 |
| 气味体验 | 气味不符合预期 | 香型不同、与旧版或描述不一致、不喜欢该香型；合并“气味与预期不符”“气味整体不达预期”等同义表达 |
| 产品质量 | 产品损坏/故障 | 结构断裂、喷头或泵故障、无法出液、制造质量差 |
| 产品质量 | 状态异常/疑似旧货 | 结块、发霉、干涸、封口异常、明确疑似使用过 |
| 产品质量 | 造成物品损坏/二次污染 | 染色、留下新污渍、破坏涂层或损坏衣物/家具 |
| 包装与容量 | 包装破损/渗漏 | 瓶盖松脱、破裂、泄漏、运输中洒出 |
| 包装与容量 | 容量/数量不足 | 瓶体未装满、规格明显偏小、标示数量不足；与漏发区分 |
| 安全与刺激 | 刺激/过敏/身体不适 | 皮疹、过敏、眼睛刺激、呼吸不适、恶心等明确反应 |
| 使用体验 | 使用/溶解体验不佳 | 难开启、难操作、过稠、泡沫异常、不溶解、残留、堵塞 |
| 价值与预期 | 价格过高/不值 | 明确认为贵、不值、浪费钱 |
| 价值与预期 | 产品体验不符合预期 | 与页面、广告、视频或明确承诺不符，但没有更具体的产品根因 |
| 物流履约 | 未收到/错投/丢失 | 未收件、错投、丢件、签收异常 |
| 物流履约 | 配送延迟 | 明确配送晚、等待时间过长 |
| 错漏发 | 错发/漏发 | 发错商品/香型/规格、套装或件数漏发 |
| 客服与退换 | 退款/退货受阻 | 退款被拒、未到账、退货被阻止 |
| 客服与退换 | 客服响应差 | 无回复、响应慢、明确服务态度或处理差 |
| 客服与退换 | 取消/扣款异常 | 取消后仍扣款、重复或异常扣款 |
| 信息不足 | 缺少可用原因信息 | 空文本、仅表情、仅泛化负面、尚未使用、评论内容与差评原因无关 |

## Common semantic merges

| 原始表达示例 | 统一标签 |
|---|---|
| 气味与预期不符、气味整体不达预期、香型不对、与旧版味道不同 | 气味不符合预期 |
| 没味道、味道很淡、几乎闻不到、不够强 | 无味/气味过淡 |
| 不持久、很快消失、洗后没有味道 | 留香不持久 |
| 没效果、没有变化、不起作用、污渍还在 | 清洁/去污效果不佳 |
| 漏液、渗漏、洒出来、瓶盖没拧好 | 包装破损/渗漏 |
| 少件、缺件、套装少一个、少发 | 错发/漏发 |
| 未收到、没送到、显示签收但未收件 | 未收到/错投/丢失 |
| 退款困难、退款被拒、退货不允许、退款未到账 | 退款/退货受阻 |

## Usage-scenario tags

Allow multiple tags. Derive from explicit review text or reliable product fields:

- 洗衣
- 洗碗
- 地板清洁
- 浴室清洁
- 厨房去油
- 衣物去渍
- 鞋类清洁
- 织物/家具清洁
- 衣柜留香
- 车内留香
- 室内留香
- 商品收货/配送
- 客服售后
- 未提及/无法判断

Merge wording variants into these canonical scenarios. Add a scenario only when it represents a materially different use context.

## Applicable-group tags

Use only explicit evidence. Never infer gender, age, health status, or household type from a product name alone.

- 儿童家庭
- 敏感/过敏人群
- 宠物家庭
- 硬水地区用户
- 软水地区用户
- 普通家庭用户
- 专业/商用用户
- 未提及/无法判断

## Boundary rules

- A subjective disliked scent is `气味不符合预期`; an objectively weak scent is `无味/气味过淡`; short duration is `留香不持久`.
- A physically broken item is `产品损坏/故障`; a damaged container or leak is `包装破损/渗漏`; damage caused to the customer's belongings is `造成物品损坏/二次污染`.
- A small stated container is `容量/数量不足`; a missing ordered unit is `错发/漏发`.
- A courier non-delivery is `物流履约`; a warehouse sent-the-wrong-item event is `错漏发`; an unresolved refund is `客服与退换`.
- Do not label `客服响应差` from the phrase “not helpful” unless seller, support, or customer service is the subject.
- Do not label safety or damage from vague phrases such as “made it worse” without an explicit affected person or object.
- Do not force a root cause from “bad”, “disappointed”, “would not recommend”, or positive-only text; use information insufficient unless another explicit cue exists.
