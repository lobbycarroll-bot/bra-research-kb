# Reverse-Engineering Shopping Guide — Une Nana Cool / Wacoal Japan

**Status checked:** 2026-09-06 (live Wacoal Web Store selectors)

## Research target

- **Fit reference supplied by Steve:** Pepper, size S, style BRA036, RN 174794; wearer is a US/Pepper 34 band and between AA and A cup
- **Working Japanese size:** approximately 75A–75B from Pepper's current conversion chart, pending direct snug-underbust and full-bust measurements; low volume, shallow/wide-set root, small frame
- **Goal:** explore comfortable, wearable, attractive Asian-market garments that flatter and accentuate a smaller bust—not merely locate one plate-cup construction. The ordering service is only a logistics choice.

## Critical sizing correction

Current Une Nana Cool product pages do **not** support the earlier claim that `ふゆうする` is sold in 65AA or 65A. Its live selector starts at **B65**. `ビタードットコットン`, `さあ、わたし`, and most other band/cup-sized current styles also start at B65.

The leading first-fit candidate **if Jum measures into Japanese A65/B65** is the current **364 Bra Liberty Fabric, size S**: Wacoal explicitly maps **its own S = A65 or B65**. Do not transfer the letter S from another brand.

### Cross-market size warning

Japanese cup letters are based on centimeter differences and are not directly equal to US letters. Wacoal defines 65 as a 62.5–67.5 cm underbust and B as about a 12.5 cm top-minus-underbust difference. Pepper's current international chart maps its US 30A to Japanese 65B, and maps its alpha S (US 34AA/34A/34B) to Japanese 75A/75B/75C. Therefore **Pepper S does not validate Wacoal S or a 65 band**. Measure Jum's snug underbust and standing full bust in centimeters before ordering.

Do not rely on Wacoal search results for a size. A search for “65A” returned styles whose actual product selector had no A65. Verify the selectable size on the product page.

## Evaluation framework: appearance × comfort

Small-bust wearers do not all want the same visual result. Record each candidate against these separate goals:

| Desired result | What to evaluate | Failure modes |
|---|---|---|
| Natural / barely-there | No upper gap, light pressure, softly rounded line | Cup edge exposing the breast when bending; flattening |
| Slim but polished | Smooth side line, lifted position, works under fitted/open-neck clothing | Excess foam, broad-looking chest |
| Rounded / upper-full | Upper-pole fill, smooth T-shirt profile | Rigid cup standing away from the body |
| Cleavage / centered | Low center, inward lift, stable neckline | Painful compression, tissue spilling, unstable gore |
| Decorative / visible lingerie | Lace or print scale suits a small frame; straps and neckline are attractive when glimpsed | Decorative cover disguising an unsuitable structural cup |

Wacoal's small-bust survey is useful for defining the brief: A/AA wearers praised a slim silhouette and freedom with fitted or open-neck clothing, while recurring complaints were cup gaping, exposure when bending, and wanting some cleavage without uncomfortable compression. Source: https://store.wacoal.jp/contents/chiebukuro/category/beauty/article71111.html

## Newly identified Wacoal candidates

### BMM022 — A-cup-specific natural type (highest-confidence fit experiment)

- Live size: **AA-A75**; ¥4,290 when checked.
- Designed specifically so the upper cup falls toward the body and the lining does not leave a gap; thin full-area pad gives gentle shape rather than heavy projection.
- Current review from a thin, low-volume wearer says it fits naturally without a thick pad and its wire curve does not hurt the ribs.
- Black version is described as adult/cute and has coordinated standard, string and T-back bottoms, so it covers the attractive-garment goal as well as fit research.
- https://store.wacoal.jp/disp/01_BMM022.html

### My Size Collection BPP330 — premium exact-volume reference

- Live made-to-order range includes **AAA75, AA75, A75 and B75**; ¥12,980 when checked.
- 4/5-cup, volume-specific construction, moderate inward shaping and natural roundness; decorative rose appliqué.
- Made in Japan after ordering; quoted delivery approximately 1–1.5 months. This is expensive, but unusually valuable because adjacent tiny cup volumes can be compared without changing the band.
- https://store.wacoal.jp/disp/01_BPP330.html

### AMPHI Stylist 4U BYJ377 — current A75 review lead

- A current A75 reviewer with a small bust reports that the normally gaping upper chest was fully covered and comfortable even with wires.
- The line advertises four size-dependent designs. Construction still needs inspection before treating it as a teardown buy.
- https://store.wacoal.jp/disp/02_BYJ377.html
## Verified purchase shortlist

| Priority | Product | Live size/stock relevant to Jum | Price checked | Construction value | Direct link |
|---|---|---|---:|---|---|
| Fit reference | **364 Bra Lace — Made with Liberty Fabric, renewed** (JB3570) | **M includes A75; L includes B75**; stock varies by color | ¥4,620 | Natural, comfortable and decorative Liberty option. The load-bearing cup is a one-piece Elc® moulded 3D cup; visible diagonal lines are outer/cover or lift components. Consumer-fit reference, **not** a vertical-seamed or verified plate cup. | https://store.wacoal.jp/disp/01_JB3570.html |
| Wired fit candidate | **Bitter Dot Cotton, renewed** (JB2780) | **B75 is in the size run**; no A75 | ¥4,620 | Strongest wired **fit** candidate: deliberately shallow cup, stretch-lace upper edge that resists gaping, low center/gore, and cotton-blend back. A small-bust specialist warns that the 65 band feels relatively tight/short. | https://store.wacoal.jp/disp/01_JB2780.html |
| Moulded wired comparator | **ふゆうする / Fuyū-suru** (JB2400) | **B75 is in the size run**; no A75 | ¥3,960 | Distinctive wired 3/4-cup construction experiment. The stretchy `ほわピタカップ` is marketed for upper-edge gaping and added volume, but current reviews sampled were mostly larger cups. It is not verified as an A/AA or plate-cup style. | https://store.wacoal.jp/disp/01_JB2400.html |
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

1. **Do not order from the earlier 65-band list.** A Pepper/US 34AA–34A maps approximately to Japanese 75A–75B, subject to direct measurements.
2. **Highest-confidence exact-size fit experiment: BMM022 in AA-A75.** It is designed specifically for AA/A volume, minimizes upper-cup gaping without heavy push-up, and keeps a slim, natural line.
3. **Aesthetic/comfort experiment: JB3570.** Consider M only if 75A is confirmed, or L if 75B is confirmed and stocked. Buy it for the Liberty appearance and 364 comfort/fit behavior—not as a plate-cup specimen.
4. **Wired comparisons: JB2780 or JB2400 in B75**, only if 75B is confirmed. Neither is verified as a vertical plate cup.
5. **Premium exact-volume comparator: My Size Collection BPP330** in the measured AAA/AA/A/B 75 size. Its cup construction changes by volume and it offers refined lace, but it costs ¥12,980 and is made to order.

Keep **BRAGENIC** as a deliberate upper-fullness/volume-building branch, not the default. Continue searching for a measured or explicitly shallow two-part vertical-seam specimen; that construction target remains unfilled.

Do **not** buy two colors of one construction for research. One garment from each architecture produces more information than duplicate colorways.

## Japanese consumer-fit evidence

The consumer evidence is unusually consistent for **364**:

- A B65 wearer chose S and reported less upper-cup gaping: https://review.rakuten.co.jp/review/review/item/1/279405_13747748/1.1/
- An outward-set, small-bust wearer in S reported no cup gap and called it a small-bust bra: https://shopping.yahoo.co.jp/products/z4emucb2u5
- Multiple very thin or post-nursing reviewers, including people with no tissue to scoop, report that 364 wraps the breast without the upper edge floating. One specifically says BRAGENIC floated while 364 did not: https://review.rakuten.co.jp/item/1/356121_10001147/1.1/
- A lifestyle reviewer independently highlights that even a very small bust does not gape at the top and that the result is natural rather than heavily pushed up: https://lee.hpplus.jp/column/3033496/

For **Bitter Dot Cotton**, small-bust specialist Feast says the cup is shallower than typical bras, the stretch-lace edge is less likely to float, and the 65 band feels relatively tight: https://feast.tokyo/blogs/news/unenanacool-fb2023

For **Fuyū-suru**, Une Nana Cool markets the product to people whose cup edge floats and who want added volume. That is relevant, but it is manufacturer/PR evidence and the live range starts at B65: https://www.une-nana-cool.com/blog/202305/-youtubefuyousuru.php

### Interpretation limits

- These are fit anecdotes, not controlled measurements. They establish a strong first-buy signal, not a universal guarantee.
- Older 364 reviews use older alpha-size mappings. Use the current product page for the current JB3570 mapping: **S = A65/B65**.
- “Asian-market” is useful here because the size range and geometry target the right population; ethnicity alone does not determine breast shape. Jum's actual measurements and observed fit remain the deciding evidence.

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