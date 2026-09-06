# Reverse-Engineering Shopping Guide — Une Nana Cool / Wacoal Japan

**Status checked:** 2026-09-06 (live Wacoal Web Store selectors)

## Research target

- **Fit reference supplied by Steve:** Pepper, size S, style BRA036, RN 174794
- **Target body:** underbust 65, low cup volume, shallow/wide-set breast root, small Asian frame
- **Goal:** buy Asian-market garments for fit and construction study. The ordering service is only a logistics choice.

## Critical sizing correction

Current Une Nana Cool product pages do **not** support the earlier claim that `ふゆうする` is sold in 65AA or 65A. Its live selector starts at **B65**. `ビタードットコットン`, `さあ、わたし`, and most other band/cup-sized current styles also start at B65.

The safest first purchase for an A65/B65-sized subject is the current **364 Bra Liberty Fabric, size S**: Wacoal explicitly maps **S = A65 or B65**.

Do not rely on Wacoal search results for a size. A search for “65A” returned styles whose actual product selector had no A65. Verify the selectable size on the product page.

## Verified purchase shortlist

| Priority | Product | Live size/stock relevant to Jum | Price checked | Construction value | Direct link |
|---|---|---|---:|---|---|
| 1 | **364 Bra Lace — Made with Liberty Fabric, renewed** (JB3570) | **S in stock; S = A65/B65** | ¥4,620 | Best first fit reference. Wireless, extremely light, breathable Elc® molded 3D cup, high side/back, triangular power-net plus twin-strap lift. Same alpha-size format as the known-good Pepper S and a Liberty print Jum likes. | https://store.wacoal.jp/disp/01_JB3570.html |
| 2 | **ふゆうする / Fuyū-suru** (JB2400) | **B65 in stock**; no A65/AA65 | ¥3,960 | Distinctive wired 3/4-cup comparator. Stretchy, cloud-soft `ほわピタカップ` conforms closely and keeps a rounded shape; elastic-free back edge. Buy only if B65 is plausible. Do not describe it as an A/AA style. | https://store.wacoal.jp/disp/01_JB2400.html |
| 3 | **Bitter Dot Cotton, renewed** (JB2780) | **B65 in stock**; no A65/AA65 | ¥4,620 | Wired 3/4 cup with a deliberately low center/gore, triangular-bra visual line, cup-lace lifting structure, and cotton-blend back. Strongest wired geometry study after Fuyū-suru. | https://store.wacoal.jp/disp/01_JB2780.html |
| 4 | **BRAGENIC Happy Bloom** (JB3840) | **B65 in stock in black**; beige B65 awaiting restock; no A65 | ¥3,630 | Wireless molded comparison. Double-Up molded cup adds volume; wide internal sheet resists lateral spread; stretch-lace upper edge. Useful to reverse-engineer *volume-building*, but not a neutral shallow-cup baseline. One color is enough. | https://store.wacoal.jp/disp/01_JB3840.html |
| 5 | **さあ、わたし Simple** (JB2310) | **B65 in stock**; no A65/AA65 | ¥3,960 | Wired 3/4 cup with wider wire, high sides/back smoothing, side support and a thick “puffy” pad specifically in B cups. Useful engineered control, but less neutral than JB2780. | https://store.wacoal.jp/disp/01_JB2310.html |

## Liberty collaboration: what to buy and what to skip

### Buy

- **JB3570, size S** — current renewed Liberty 364. Four current colors were shown and S was selectable/in stock on the checked page. Pattern names include Meadow Muse Display and Godwin.

### Skip or monitor

- **JB3523** — previous Liberty 364 version. S was sold out in every checked color and Wacoal says it will not be reproduced. https://store.wacoal.jp/disp/01_JB3523.html
- **JB2323** — Liberty `さあ、わたし` wired 3/4 cup. Current checked color had no B65; smallest in-stock 65-band size was C65, which is too much volume for the present target. https://store.wacoal.jp/disp/01_JB2323.html
- **JB3950 Night-Up Bra** and **LB1082 cotton triangle bra** may be pleasant Liberty garments, but are low priority for reverse engineering because they do not isolate the everyday cup/wire geometry being studied.

## Recommended first order

1. **JB3570 in S** — safest fit and best match to Jum's Liberty preference.
2. **JB2400 in B65** — only if B65 is a reasonable trial size; gives the most distinctive engineered cup comparison.
3. **JB2780 in B65** — add when the budget allows a second wired architecture.

Do **not** buy two colors of one construction for research. One garment from each architecture produces more information than duplicate colorways.

## Ordering routes

### Easiest: Wacoal's integrated WorldShopping

Wacoal product pages display a WorldShopping cart for international buyers. Current fee structure:

- first payment: item price + Japanese domestic shipping + a **10% proxy-purchase fee**
- second payment: actual international shipping + **¥500 handling per international package** + any insurance/tax
- WorldShopping says orders from multiple shops can be consolidated **without an additional consolidation fee** if support is contacted after ordering and before the second payment

This is the easiest route for the verified Wacoal links. It can also be a good route for sheet music if WorldShopping supports the music seller or accepts it through its purchase-request form; request consolidation before paying international postage.

- Fees: https://help.worldshopping.global/hc/en-us/articles/4830466068894-Overview-of-Costs
- Consolidation: https://help.worldshopping.global/hc/en-us/articles/4830476732958-Can-I-Combine-Multiple-Orders-to-Be-Shipped-Together

### Potentially cheaper for a larger basket: Buyee

Buyee Cart currently charges **¥500 per store order**, plus Japanese domestic shipping and international shipping. Its “Order with URL” service says multiple items from the same store remain one ¥500 purchase fee. A compensation/inspection plan is optional and costs extra. This can beat WorldShopping's 10% fee once the Wacoal basket becomes large, and is useful when combining several Japanese stores.

- Fees: https://bc.help.buyee.jp/en/fee/
- Order with URL: https://media.buyee.jp/guide/othershopping/en/

### Tenso forwarding

Tenso supplies a Japanese delivery address, but the buyer must complete each Japanese store checkout. Use it only if Wacoal accepts the buyer's payment and the extra setup is worthwhile. It offers several carriers and paid package consolidation.

### Amazon Japan direct

Amazon Japan can be best when the **exact product code and size** are eligible for direct international delivery and the sheet music is in the same shipment. Do not substitute based only on a translated title. Confirm `JB3570 S`, `JB2400 B65`, etc., plus seller and international-delivery eligibility.

## Teardown/measurement checklist

Record before cutting anything:

- relaxed and stretched underband length
- gore/center height and width
- cup width, cup depth, upper-edge length, apex location
- wire trace, tip-to-tip width, wire length and spring (wired styles)
- cradle seam and side-seam locations
- pad/foam thickness map
- strap spacing and lift-vector attachment points
- layer order, grain/stretch direction, stabilizers and elastic tensions
- front/side/top photos on the same body or cast for every garment

## Evidence notes

Product claims, current prices, available sizes and stock above were read from the live official Wacoal Web Store pages on 2026-09-06. Stock and prices can change; construction descriptions and explicit size mappings are more durable than availability.