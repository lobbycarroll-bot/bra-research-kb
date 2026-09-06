# Reverse-Engineering Shopping Guide — Une Nana Cool / Wacoal Japan

**Status checked:** 2026-09-06 (live Wacoal Web Store selectors)

## Research target

- **Fit reference supplied by Steve:** Pepper, size S, style BRA036, RN 174794
- **Target body:** underbust 65, low cup volume, shallow/wide-set breast root, small Asian frame
- **Goal:** buy Asian-market garments for fit and construction study. The ordering service is only a logistics choice.

## Critical sizing correction

Current Une Nana Cool product pages do **not** support the earlier claim that `ふゆうする` is sold in 65AA or 65A. Its live selector starts at **B65**. `ビタードットコットン`, `さあ、わたし`, and most other band/cup-sized current styles also start at B65.

The leading first-fit candidate **if Jum measures into Japanese A65/B65** is the current **364 Bra Liberty Fabric, size S**: Wacoal explicitly maps **its own S = A65 or B65**. Do not transfer the letter S from another brand.

### Cross-market size warning

Japanese cup letters are based on centimeter differences and are not directly equal to US letters. Wacoal defines 65 as a 62.5–67.5 cm underbust and B as about a 12.5 cm top-minus-underbust difference. Pepper's current international chart maps its US 30A to Japanese 65B, and maps its alpha S (US 34AA/34A/34B) to Japanese 75A/75B/75C. Therefore **Pepper S does not validate Wacoal S or a 65 band**. Measure Jum's snug underbust and standing full bust in centimeters before ordering.

Do not rely on Wacoal search results for a size. A search for “65A” returned styles whose actual product selector had no A65. Verify the selectable size on the product page.

## Verified purchase shortlist

| Priority | Product | Live size/stock relevant to Jum | Price checked | Construction value | Direct link |
|---|---|---|---:|---|---|
| 1 | **364 Bra Lace — Made with Liberty Fabric, renewed** (JB3570) | **S in stock; S = A65/B65** | ¥4,620 | Best first fit reference. Wireless, extremely light, breathable Elc® molded 3D cup, high side/back, triangular power-net plus twin-strap lift. Do not equate this Wacoal S with Pepper S; the brands use different mappings. Liberty print Jum likes. | https://store.wacoal.jp/disp/01_JB3570.html |
| 2 | **Bitter Dot Cotton, renewed** (JB2780) | **B65 in stock**; no A65/AA65 | ¥4,620 | Strongest wired **fit** candidate: deliberately shallow cup, stretch-lace upper edge that resists gaping, low center/gore, and cotton-blend back. A small-bust specialist warns that the 65 band feels relatively tight/short. | https://store.wacoal.jp/disp/01_JB2780.html |
| 3 | **ふゆうする / Fuyū-suru** (JB2400) | **B65 in stock**; no A65/AA65 | ¥3,960 | Distinctive wired 3/4-cup construction experiment. The stretchy `ほわピタカップ` is marketed for upper-edge gaping and added volume, but current reviews sampled were mostly larger cups. It is not verified as an A/AA or plate-cup style. | https://store.wacoal.jp/disp/01_JB2400.html |
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

1. **JB3570 in S** — best-supported consumer-fit trial and the best match to Jum's Liberty preference. Current S explicitly covers A65/B65.
2. **JB2780 in B65** — best wired fit comparison if B65 is plausible; shallow cup and stretch-lace edge, but expect a snugger 65 band.
3. **JB2400 in B65** — useful construction experiment if the budget allows; buy for its conforming molded cup, not because it has been proven as the best tiny-bust fit.

Keep **JB3840 BRAGENIC** as a lower-priority volume-building control. A detailed 364 review reports BRAGENIC floating at the upper edge on an extremely thin, small bust while 364 did not.

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

## From shopping research to an original bra

The retail purchases are not the endpoint. They are a structured way to discover which Asian-market fit decisions work on Jum before committing them to a pattern.

### Evidence hierarchy

1. **Jum's observed comfort and appearance** — decisive.
2. **Direct garment measurements and internal construction** — explains why the result worked.
3. **Repeated reports from wearers with similar measurements and shape** — useful for choosing what to test.
4. **Fitter/manufacturer design intent** — generates hypotheses, but does not prove fit.
5. **Nationality or broad demographic assumptions** — never sufficient by themselves.

Japanese and other Asian sources are especially valuable here because their retail ranges and fitter experience include many more low-volume cup/small-frame cases than typical English-language bra-making material. The advantage is a closer reference population and different design priorities—not a claim that every Asian body shares one geometry.

### Fit-test protocol: keep garments intact first

For each candidate, photograph and score:

- immediate comfort, then comfort after 2 and 8 hours
- band stability during reaching, bending and sitting
- upper-edge gap while standing and bending forward
- gore or center pressure; wire contact at ribs and outer root
- strap position and tendency to slip
- natural, rounded, upper-full and cleavage effects
- appearance under a fitted knit, loose blouse and open neckline
- whether the garment feels attractive to Jum, independent of apparent size

Do not cut the only sample until its fit has been reproduced in measurements or a toile.

### Measurement and synthesis

1. Trace the wire or lower cup boundary and record relaxed/stretched band lengths.
2. Measure cup width, depth, apex position, upper-edge length and pad-thickness map.
3. Identify the smallest set of features responsible for the successful effect: for example, shallow depth plus closed edge, low gore plus inward lift, or a flexible mould plus high side support.
4. Draft separate prototypes for **comfort geometry** and **visual enhancement** before combining them. This prevents a thick pad from disguising a poor underlying fit.
5. Make an original hybrid pattern using the winning relationships, then repeat the same movement and clothing tests.

### Proposed first comparison set

- **Natural exact-volume baseline:** Wacoal BMM022, AA-A75.
- **Comfort + decorative baseline:** Liberty 364 JB3570 in the measured equivalent size.
- **Rounded/upper-full branch:** a current A75/B75 BRAGENIC or A-cup-specific volume-up design.
- **Precise premium reference:** My Size Collection BPP330 in the measured AAA/AA/A/B75 size.
- **Seamed shallow construction:** still to be located; prioritize a two-part vertical cup or a garment with published/measured shallow depth.

The desired result is not simply “make the bust look larger.” It is a comfortable, stable and deliberately attractive small-bust silhouette, with the wearer able to choose natural, polished, rounded or cleavage-enhanced effects.

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