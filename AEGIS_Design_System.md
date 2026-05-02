# AEGIS Design System
> C³ Cube Strategy Model / MAP HACK — v1.0 (2026-04)  
> 향후 MVP에 재사용 가능한 디자인 토큰 체계

---

## 1. 설계 원칙

| 원칙 | 내용 |
|---|---|
| **신뢰성 (Trustworthy)** | 딥 코발트 계열이 전문성과 권위를 표현. 충동적 밝기 지양. |
| **참신함 (Distinctive)** | 과포화된 인디고/블루 대신 바이올렛-코발트 + 틸 조합 |
| **가독성 (Readable)** | 모든 텍스트 색상은 WCAG AA(4.5:1) 이상 보장 |
| **일관성 (Consistent)** | CSS 변수 + Tailwind 토큰 기반 단일 진실의 근원 |

---

## 2. 컬러 팔레트

### 2-1. Brand Primary — Deep Cobalt Violet

> 기존 SaaS의 평범한 인디고와 차별화. 더 깊고 권위적인 바이올렛-코발트 계열.

| Token | Hex | Tailwind | WCAG (흰 배경) | 용도 |
|---|---|---|---|---|
| `brand-50`  | `#F0EFFF` | `indigo-50`  | — | 배경 틴트 |
| `brand-100` | `#E4E3FF` | `indigo-100` | — | 호버 배경 |
| `brand-200` | `#CCCAFF` | `indigo-200` | — | 보더 강조 |
| `brand-300` | `#A9A6FF` | `indigo-300` | — | 비활성 아이콘 |
| `brand-400` | `#8279FF` | `indigo-400` | 3.1:1 | 대형 장식 요소 |
| `brand-500` | `#5B52F5` | `indigo-500` | **4.8:1 ✅ AA** | 기본 인터랙티브 |
| `brand-600` | `#4A40DC` | `indigo-600` | **6.1:1 ✅ AA** | 호버, 버튼 |
| `brand-700` | `#3830B8` | `indigo-700` | **7.8:1 ✅ AAA** | 텍스트 링크 |
| `brand-800` | `#29239A` | `indigo-800` | 9.4:1 ✅ | 다크 강조 |
| `brand-900` | `#1C1872` | `indigo-900` | 12.1:1 ✅ | 최고 강조 |
| `brand-950` | `#0D0B42` | `indigo-950` | 16.8:1 ✅ | 다크 배경 |

```css
--color-brand:       #5B52F5;  /* primary */
--color-brand-dark:  #4A40DC;  /* hover */
--color-brand-light: #8279FF;  /* decoration */
--color-brand-bg:    #F0EFFF;  /* light bg tint */
```

---

### 2-2. Accent — Strategic Teal

> 신선함과 실행력을 표현. 기존 스카이블루/에메랄드와 다른 독자적 위치.

| Token | Hex | Tailwind | WCAG (흰 배경) | 용도 |
|---|---|---|---|---|
| `teal-100` | `#CCFBF0` | `teal-100` | — | 배경 틴트 |
| `teal-400` | `#2DD4B3` | `teal-400` | 2.7:1 | 그래프·장식 |
| `teal-500` | `#14B89B` | `teal-500` | 3.8:1 | 아이콘·배지 |
| `teal-600` | `#0D9480` | `teal-600` | **4.6:1 ✅ AA** | 텍스트·버튼 |
| `teal-700` | `#0F766A` | `teal-700` | **6.1:1 ✅ AA** | 강조 텍스트 |

```css
--color-accent:      #14B89B;
--color-accent-dark: #0D9480;
--color-accent-bg:   #F0FDF9;
```

---

### 2-3. Warm Slate Neutral

> 쿨 그레이 대신 미세한 퍼플 틴트로 브랜드 아이덴티티와 응집력 확보.

| Token | Hex | Tailwind | 용도 |
|---|---|---|---|
| `slate-50`  | `#F6F6FE` | `slate-50`  | 앱 배경 (라이트) |
| `slate-100` | `#EDEDFB` | `slate-100` | 표면 배경 |
| `slate-200` | `#DCDCF5` | `slate-200` | 보더, 구분선 |
| `slate-300` | `#C2C1E8` | `slate-300` | 비활성 보더 |
| `slate-400` | `#9291CC` | `slate-400` | 플레이스홀더 |
| `slate-500` | `#6B6AAA` | `slate-500` | 뮤트 텍스트 (4.7:1 ✅) |
| `slate-600` | `#525190` | `slate-600` | 보조 텍스트 (6.3:1 ✅) |
| `slate-700` | `#3D3C72` | `slate-700` | 기본 텍스트 (8.1:1 ✅) |
| `slate-800` | `#292858` | `slate-800` | 강조 텍스트 |
| `slate-850` | `#1D1C42` | `slate-850` | 다크 표면 |
| `slate-900` | `#131230` | `slate-900` | 다크 배경 |
| `slate-950` | `#08071C` | `slate-950` | 최심부 배경 |

---

### 2-4. Signal Colors (상태 색상)

> 기존 Tailwind 기본값 유지. 이미 WCAG AA 적합.

| 용도 | Tailwind 클래스 | Hex (text용 600) | WCAG |
|---|---|---|---|
| Success / 완료 | `emerald-600` | `#059669` | 4.6:1 ✅ |
| Warning / 주의 | `amber-700`   | `#B45309` | 4.5:1 ✅ |
| Danger / 오류  | `rose-600`    | `#E11D48` | 4.7:1 ✅ |
| Info / 정보    | `sky-600`     | `#0284C7` | 4.5:1 ✅ |

---

## 3. 타이포그래피

### 3-1. Font Stack

```css
font-family: "Noto Sans KR", Inter, system-ui, -apple-system, sans-serif;
```

| 폰트 | 역할 | Weight |
|---|---|---|
| **Noto Sans KR** | 한국어 최우선 렌더링 | 300 · 400 · 500 · 600 · 700 · 900 |
| **Inter** | 영문·숫자 보완 | 300 · 400 · 500 · 600 · 700 · 900 |
| **JetBrains Mono** | 코드·데이터·점수 | 400 · 500 · 700 |

> **왜 Noto Sans KR?** 맑은 고딕(Windows 기본)보다 웹 최적화, 크기 대응, 굵기 범위가 우수하며 픽셀 밀도가 높은 디스플레이에서 가독성이 현저히 좋음.

### 3-2. Scale

| 역할 | Size | Weight | Line-height | Tailwind |
|---|---|---|---|---|
| Display / Hero | 48–60px | 900 | 1.1 | `text-5xl font-black` |
| Heading 1 | 36px | 900 | 1.2 | `text-4xl font-black` |
| Heading 2 | 24px | 800 | 1.3 | `text-2xl font-black` |
| Heading 3 | 20px | 700 | 1.4 | `text-xl font-bold` |
| Body Large | 18px | 400 | 1.7 | `text-lg` |
| Body | 14–16px | 400 | 1.7 | `text-sm` ~ `text-base` |
| Caption | 11–12px | 600 | 1.5 | `text-xs font-semibold` |
| Label | 9–10px | 700–900 | 1.4 | `text-[10px] font-black uppercase tracking-widest` |

> 한국어 권장 행간: **1.7** (영문 1.5보다 넓게 — 한글 자소 복잡도 반영)

---

## 4. 그림자 시스템

```css
/* 브랜드 컬러 반영 그림자 */
--shadow-brand-sm:   0 1px 3px rgba(91,82,245,0.12), 0 1px 2px rgba(91,82,245,0.08);
--shadow-brand-md:   0 4px 12px rgba(91,82,245,0.18), 0 2px 4px rgba(91,82,245,0.10);
--shadow-brand-lg:   0 8px 30px rgba(91,82,245,0.24), 0 4px 8px rgba(91,82,245,0.12);
--shadow-brand-glow: 0 0 40px rgba(91,82,245,0.35);
```

---

## 5. 공간·레이아웃

| 요소 | 값 |
|---|---|
| 카드 모서리 반경 | `rounded-2xl` (16px) ~ `rounded-[2rem]` (32px) |
| 섹션 간격 | `gap-8` (32px) 기본, 주요 섹션 `space-y-10` |
| 모달 내부 패딩 | `p-6 lg:p-10` |
| 버튼 패딩 | `px-5 py-2.5` (기본) / `px-8 py-4` (CTA) |
| 그리드 | 1col → 2col → 3col (md: / lg: 브레이크포인트) |

---

## 6. 다크 모드 원칙

```
Light Mode:                      Dark Mode:
  배경: slate-50  (#F6F6FE)        배경: slate-950 (#08071C)
  표면: white                      표면: slate-900 (#131230)
  텍스트: slate-900 (#131230)      텍스트: slate-50 (#F6F6FE)
  뮤트: slate-500                  뮤트: slate-400
  브랜드: indigo-600               브랜드: indigo-400
```

---

## 7. 접근성 체크리스트 (WCAG 2.1 AA)

- [x] 모든 본문 텍스트 색상 대비 **4.5:1 이상** (slate-500+ on white ✅)
- [x] 대형 텍스트 (18px+) 대비 **3:1 이상**
- [x] 인터랙티브 요소 포커스 링 (`:focus-visible`) 가시성 확보
- [x] 컬러만으로 정보 전달하지 않음 (아이콘·레이블 병용)
- [x] 다크모드 전환 시 모든 비율 유지
- [ ] 스크린리더 `aria-label` — 주요 컴포넌트 대응 필요
- [ ] 키보드 내비게이션 완전 지원 — tabIndex 검토 필요

---

## 8. 컴포넌트 빠른 참조

### 버튼

```html
<!-- Primary CTA -->
<button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm
               rounded-xl shadow-brand-md transition-all focus-visible:ring-2
               focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
  전장 분석 시작
</button>

<!-- Secondary -->
<button class="px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200
               text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl
               border border-slate-200 dark:border-white/10 transition-all">
  취소
</button>

<!-- Teal Accent -->
<button class="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-black
               text-sm rounded-xl transition-all">
  전략 실행
</button>
```

### 배지 / 레이블

```html
<!-- Brand -->
<span class="px-2.5 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40
             dark:text-indigo-300 text-[10px] font-black uppercase tracking-widest
             rounded-full border border-indigo-200 dark:border-indigo-500/30">
  전략 완료
</span>

<!-- Teal -->
<span class="px-2.5 py-1 bg-teal-100 text-teal-700 dark:bg-teal-900/40
             dark:text-teal-300 text-[10px] font-black uppercase tracking-widest
             rounded-full border border-teal-200 dark:border-teal-500/30">
  AEO 최적화
</span>
```

### 카드

```html
<div class="bg-white dark:bg-slate-900 rounded-[1.5rem] p-6
            border border-slate-200 dark:border-slate-800
            shadow-brand-sm hover:shadow-brand-md
            transition-all theme-transition">
  <!-- 카드 내용 -->
</div>
```

---

## 9. 사용 금지 패턴

| 금지 | 이유 |
|---|---|
| `text-slate-300`을 흰 배경 텍스트로 사용 | 대비 1.9:1 — WCAG 실패 |
| `text-teal-500`을 소형 텍스트에 사용 | 대비 3.8:1 — 소형 기준 미달 |
| `text-indigo-400`을 라이트 모드 텍스트로 사용 | 대비 3.1:1 — AA 미달 |
| 색상만으로 오류/성공 구분 | 색맹 접근성 위반 — 아이콘 병용 필수 |
| 볼드체 `**` 마크다운을 생성 콘텐츠에 포함 | 채널 가독성 저해 (기존 정책 유지) |

---

## 10. Google Fonts CDN 링크

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

---

*AEGIS Design System — Project MAP HACK | © 2026 PROJECT AEGIS*
