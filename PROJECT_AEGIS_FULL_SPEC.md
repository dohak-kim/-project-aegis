# PROJECT AEGIS — C³ Cube Strategy Model
## 완전 기술 명세서 v2.8 (Full Technical Specification)

> 작성일: 2026-05-02  
> 버전: v2.8 (Deterministic Data Pipeline 실제 가동 + Naver DataLab 트렌드 통합 + Vite 프록시 CORS 해결 + .env.local 키 관리 + CEP 카드 배지 위치 개선)  
> 용도: Claude · NotebookLM · Google AI Studio 재활용 참조 문서

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [핵심 프레임워크 — C³ 큐브 전략 모델](#2-핵심-프레임워크)
3. [기술 스택](#3-기술-스택)
4. [시스템 아키텍처 및 데이터 플로우](#4-시스템-아키텍처-및-데이터-플로우)
5. [핵심 데이터 타입 정의](#5-핵심-데이터-타입-정의)
6. [AI 엔진 상세 명세](#6-ai-엔진-상세-명세)
7. [Hub & Spoke Triple Media 전략 아키텍처](#7-hub--spoke-triple-media-전략-아키텍처)
8. [AEGIS FORGE — 콘텐츠 생성 엔진](#8-aegis-forge--콘텐츠-생성-엔진)
9. [Deterministic Data Pipeline (v2.7 신규)](#9-deterministic-data-pipeline-v27-신규)
10. [Temporal Intelligence — 시계열 비교 분석](#10-temporal-intelligence--시계열-비교-분석)
11. [주요 기능 목록](#11-주요-기능-목록)
12. [컴포넌트 인벤토리](#12-컴포넌트-인벤토리)
13. [UI/UX 레이아웃 명세](#13-uiux-레이아웃-명세)
14. [검색 설정 시스템](#14-검색-설정-시스템)
15. [통계적 대표성 및 토큰 원가 분석](#15-통계적-대표성-및-토큰-원가-분석)
16. [유료화 과금 체계 설계](#16-유료화-과금-체계-설계)
17. [디자인 시스템](#17-디자인-시스템)
18. [파일 구조](#18-파일-구조)
19. [v2.6 → v2.7 변경 이력](#19-v26--v27-변경-이력)
20. [v2.7 → v2.8 변경 이력](#20-v27--v28-변경-이력)

---

## 1. 프로젝트 개요

### 1.1 프로젝트 정체성

| 항목 | 내용 |
|------|------|
| **프로젝트명** | Project AEGIS |
| **서브타이틀** | C³ Cube Strategy Model |
| **별칭** | MAP HACK (내부 개발 코드명) |
| **핵심 포지셔닝** | AI 기반 디지털 마케팅 인텔리전스 플랫폼 |
| **현재 버전** | v2.7 |

### 1.2 제품 핵심 가치 (Value Proposition)

> "키워드 하나를 입력하면, AI가 시장의 CEP(전략 진입점)를 자동 추출하고, CDJ Journey Ladder로 전략 지도를 시각화합니다. 5 Strategy Framework으로 포지션을 분류하고, Hub & Spoke Triple Media 전략(Owned·Earned·Paid × SEO·AEO·GEO)을 수립하며, AEGIS FORGE로 즉시 실행 가능한 콘텐츠를 단조합니다."

### 1.3 전체 워크플로우

```
[입력] 카테고리 + 브랜드 + 경쟁사
    ↓
[Step 1] CEP 분석 — AI 시맨틱 클러스터링
    ↓
[Step 2] C³ Journey Ladder — CDJ 4단계 시각화
    ↓
[Step 3] 5 Strategy Framework — 자동 전략 분류
    ↓
[Step 4] Hub & Spoke Triple Media 전략 수립
          Hub (Owned) ← Spoke 1 (Earned) + Spoke 2 (Paid)
    ↓
[Step 5] SEO·AEO·GEO 3중 최적화 레이어 적용
    ↓
[Step 6] AEGIS FORGE — 콘텐츠 단조 실행
    ↓
[출력] 전략 보고서 + 실행 가능 콘텐츠
```

---

## 2. 핵심 프레임워크

### 2.1 C³ = Context × Conversion × Cognition

#### Context (C1) — CEP
- **CEP (Context Entry Point)**: 시장에서 발생하는 검색 의도의 의미론적 클러스터
- SERP 분석으로 최대 15개 CEP 자동 추출
- 각 CEP: QueryGroup, Priority Score, Brand SOV, CognitionVector 포함

#### Cognition (C2) — 4가지 인지 유형

| 유형 | 코드 | 설명 | Hub 콘텐츠 형식 |
|------|------|------|----------------|
| 정보 탐색 | `informational` | 지식 습득, 문제 해결 | SEO 롱폼, AEO FAQ |
| 비교 탐색 | `exploratory` | 브랜드/제품 비교 | 비교 가이드, 케이스 스터디 |
| 상업적 조사 | `commercial` | USP 강조, 경쟁 우위 | GEO 엔티티, 랜딩 카피 |
| 구매 전환 | `transactional` | 직접 전환, CTA | 검색광고, 소셜 광고 |

**CognitionVector**: 4개 유형의 강도(Intensity) 분포. 합산 100% 초과 가능.

#### Conversion Stage (C3) — CDJ 4단계

```
AWARENESS → CONSIDERATION → DECISION → POST_PURCHASE
인지(탐색)    고려(비교)      구매결정      구매후관리
```

### 2.2 C³ Journey Ladder (v2.6+)

정성조사 Laddering 방법론(Value→Benefit→Attribute)을 C³에 적용:

```
CDJ Stage (Value)  →  CEP Cluster (Benefit)  →  Keywords (Attribute)
   인지 / 고려              전략 블록                 실제 검색어
   구매결정 / 구매후관리    Cognition 의도             볼륨·경쟁도
```

4컬럼 수평 배치 → 각 컬럼 내 CEP 카드 → 키워드 칩.

### 2.3 5가지 전략 유형

| 전략 | 코드 | 적용 조건 | FORGE 권고 |
|------|------|---------|-----------|
| **공격** | `offensive` | 낮은 점유율, 성장 시장 | Paid 검색광고 + Hub SEO |
| **방어** | `defensive` | 높은 점유율, 경쟁 심화 | Hub GEO + Earned 보도자료 |
| **신규 진입** | `niche_capture` | 틈새 시장, 경쟁 낮음 | AEO FAQ + GEO 엔티티 선점 |
| **브랜드 빌드** | `brand_build` | 신규 브랜드, 인지도 부족 | Hub SEO 롱폼 + GEO 권위글 |
| **관찰** | `monitor` | 낮은 ROI, 최소 대응 | Owned Spoke FAQ 확장글 |

---

## 3. 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| **React** | 19 | UI 프레임워크 |
| **TypeScript** | 5.x | 타입 안전성 |
| **Vite** | 5.x | 빌드 도구 |
| **Tailwind CSS** | v3 (CDN) | 스타일링 |
| **D3.js** | 7.x | CognitionRadialGraph SVG |
| **react-force-graph-2d** | latest | Similarity Network |
| **@google/genai** | latest | Gemini AI SDK |

**AI 모델:**

| 모델 | 용도 | Temperature |
|------|------|------------|
| `gemini-3-pro-preview` | CEP 추출, 전략 수립, 콘텐츠 생성 | 0.1~0.85 |
| `gemini-3-flash-preview` | 콘텐츠 평가, 개선 제안, 시계열 인사이트 | 0.1~0.35 |

---

## 4. 시스템 아키텍처 및 데이터 플로우

### 4.1 단독 분석 모드 플로우

```
[사용자 입력] BattleFieldInput { category, brandName, competitors }
   + SearchConfig { depth, period, sources, comparisonMode }
         ↓
[Step 1] fetchAndClassifyRawData()  → Gemini + Google Grounding
         density.google×5 + density.naver×5 raw SERP 데이터 수집

[Step 2] suggestContexts()          → RAG Mode / Grounding Fallback
         - RAG Mode: SerpApiPayload 주입 시 AI는 시맨틱 클러스터링만 수행
         - Fallback: Gemini 그라운딩 + dataProvenance='grounding_estimate' 마킹
         → max 15개 CEP 생성

[Step 3] 후처리 파이프라인
         groupByCluster()
         → calculateBrandPresence()
         → resolveHybridCognition()
         → calculateBrandMetrics()   (1:1 vs 1:n 경쟁 강도 정규화)
         → classifyStrategy()        (5 Strategy 분류)
         → generateStrategyAction()  (한국어 실행 방향)

[Step 4] Top-5 실행 계획 자동 생성  → generateExecutionPlan() × 5 (parallel)

[Step 5] UI 렌더링
         ├─ 3-Tab Viz:
         │   ├─ CDJLadderView (기본)
         │   ├─ ContextCognitionMatrix (Strategic Heatmap)
         │   └─ ContextForceGraph (Similarity Network)
         ├─ 동적 분석 뱃지: CEP수, 지배Cognition, 전략유형, AvgScore, 기간
         └─ ContextList / StrategicDashboard

[Step 6] CEP 카드 클릭 → ContextModal (3섹션 수직 레이아웃)
         Section 01: 컨텍스트 분석 (CognitionVector + 키워드 심층분석 + FactReading)
         Section 02: AI 트리플 미디어 전략 (Hub & Spoke, 탭 없이 전체 표시)
         Section 03: AEGIS FORGE (항상 노출)
```

### 4.2 비교 분석 모드 플로우

```
[Snapshot A] + [Snapshot B]
         ↓
matchCEPs() — Multi-signal Scoring (v2.7 개선)
  textSim × 0.50  (multi-field, morpheme-stripped)
  kwSim   × 0.15  (keyword overlap, 0 when empty)
  cognitionBonus  +0.12 (same dominant cognition)
  stageBonus      +0.08 (same CDJ stage)
  priorityBonus   +0.06 (±25pt proximity)
  threshold: 0.12 (was 0.25 — 계절성·표현차이 허용)
         ↓
TemporalComparison { matched[], emerging[], disappeared[] }
         ↓
SankeyDiagram (매칭 신뢰도 배지) + TemporalComparisonView + AI 인사이트
```

---

## 5. 핵심 데이터 타입 정의

### 5.1 Context (CEP)

```typescript
interface Context {
  id: string;
  category: string;
  situation: string;
  description?: string;
  metadata: ContextMetadata;
  marketSignal: MarketSignal;
  journey: JourneyState;
  actions: Action[];

  // Strategy
  strategyType?: StrategyType;
  actionPlan?: StrategyAction;
  executionPlan?: ExecutionPlan;

  // Analysis Fields
  queryGroup?: string;
  cognitionConfidence?: number;
  estimatedTotalResults?: number;
  serpFeaturesList?: string[];

  // Data Provenance (v2.7)
  dataProvenance?: 'api' | 'grounding_estimate';
  serpFeatureFlags?: SerpFeatureFlags;
  brandPresenceSource?: 'api' | 'ai_simulated';

  // SOV
  brandPresence?: BrandPresence[];
  brandShare?: number;
  competitorShare?: number;
  numCompetitorsTracked?: number;
}

interface MarketSignal {
  naverScore: number;
  googleScore: number;
  trendDirection: "UP" | "FLAT" | "DOWN";
  priorityScore: number;
  volumeIsEstimated: boolean;     // v2.7: UI 'estimated' 배지 트리거
  naverVolumeRange?: string;      // Naver API 구간값 (예: "1000~10000")
}

interface SerpFeatureFlags {
  hasFeaturedSnippet: boolean;    // → AEO FAQ 전략 트리거
  hasPAA: boolean;                // → Q&A 콘텐츠 트리거
  hasAIOverview: boolean;         // → GEO 전략 트리거
  hasShopping: boolean;
  hasVideoCarousel: boolean;
  paaQuestions?: string[];
}
```

### 5.2 ForgeWorkflowPlan (v2.7 신규)

```typescript
// 3-tier Hub & Spoke 캠페인 아키텍처 타입
interface ForgeWorkflowPlan {
  cepId: string;
  strategyType: StrategyType;
  hub:          ForgeWorkflowItem[];  // Owned Media (primary + derived)
  spoke1_earned:ForgeWorkflowItem[];  // Earned Media
  spoke2_paid:  ForgeWorkflowItem[];  // Paid Media
}

interface ForgeWorkflowItem {
  tier: 'hub' | 'spoke1_earned' | 'spoke2_paid';
  hubRole?: 'primary' | 'derived';   // Hub 내부 역할
  contentBrief: string;
  mediaType: MediaType;
  subType: ContentSubType;
  optimization: { seo: boolean; aeo: boolean; geo: boolean };
  aeoTrigger: 'serp_data' | 'strategy_heuristic' | 'none';
  geoTrigger: 'serp_data' | 'strategy_heuristic' | 'none';
}
```

### 5.3 TemporalComparison

```typescript
interface MatchedCEP {
  cepA: Context;
  cepB: Context;
  matchScore: number;
  scoreChangePct: number;
  changeType: 'growing' | 'declining' | 'stable';
  cognitionShift: boolean;
  matchDetail?: {
    textSim: number; kwSim: number;
    cognitionBonus: number; stageBonus: number; priorityBonus: number;
  };
}
```

---

## 6. AI 엔진 상세 명세

### 6.1 Temperature 설계 원칙

| 함수 | 모델 | Temp | 설계 이유 |
|------|------|------|---------|
| `fetchAndClassifyRawData` | Pro | **0.1** | SERP 팩트 분류 |
| `suggestContexts` (Grounding) | Pro | **0.2** | 시맨틱 클러스터링 |
| `suggestContexts` (RAG Mode) | Pro | **0.2** | 클러스터링만 수행 |
| `generateExecutionPlan` | Pro | **0.25** | 전략 수립 |
| `generateTemporalInsights` | Flash | **0.35** | 분석+해석 균형 |
| `evaluateContent` | Flash | **0.1** | 일관된 채점 |
| `generateAssetContent` | Pro | **0.85** | 높은 창의성 |

### 6.2 suggestContexts() RAG Mode vs Grounding Fallback

```typescript
// RAG Mode: 실제 API 데이터 주입 시
const prompt = `
[실제 API 수집 데이터 — 수정 불가]
${JSON.stringify(keywordSummary)}

엄격한 제약: 없는 키워드 발명 금지, 볼륨 변경 금지.
AI 역할: 시맨틱 클러스터링 + 인지 의도 분류 + CDJ 단계 매핑만.
`;

// Grounding Fallback: API 없을 때
// dataProvenance = 'grounding_estimate'
// marketSignal.volumeIsEstimated = true → UI에 amber 'AI 추정값' 배지
```

### 6.3 FORGE 최적화 레이어 (v2.7 미디어별 분기)

```
Owned Hub (primary):
  SEO: H1/H2 구조, 키워드 배치, meta_description, 내부링크
  AEO: 역피라미드, FAQ JSON-LD 스키마, PAA 연관 질문 3개
  GEO: 엔티티 명시, "A는 B이다" 정의, 수치·통계, E-E-A-T

Owned Hub (derived): SEO 기본 + Hub 내부링크

Earned:
  press_release / influencer_brief → GEO (브랜드+엔티티 Co-occurrence, 인용 문구)
  community_post → AEO (PAA 시딩 — Q&A 구조로 질문 선점)

Paid:
  landing_copy → AEO (직접 답변 구조 + 비교표 + FAQ 3~5쌍)
  search_ad / social_ad → SEO 품질점수 최적화 (H1/H2 없음)
```

### 6.4 C³ → FORGE 자동 추천 매트릭스

| Cognition \ Strategy | offensive | defensive | niche_capture | brand_build | monitor |
|---|---|---|---|---|---|
| **informational** | Owned Hub / SEO 롱폼 | Owned Hub / GEO 엔티티 | Owned Hub / AEO FAQ | Owned Hub / SEO 롱폼 | Owned Spoke / FAQ |
| **exploratory** | Owned Spoke / 지원아티클 | Earned / 보도자료 | Owned Hub / AEO FAQ | Earned / 인플루언서 | Owned Spoke / 케이스 |
| **commercial** | Paid / 검색광고 | Owned Spoke / 케이스 | Paid / 소셜광고 | Owned Hub / GEO 엔티티 | Owned Spoke / FAQ |
| **transactional** | Paid / 랜딩카피 | Paid / 검색광고 | Paid / 소셜광고 | Earned / 커뮤니티 | Owned Spoke / 지원아티클 |

---

## 7. Hub & Spoke Triple Media 전략 아키텍처

### 7.1 3-Tier 구조 (v2.7 재정의)

```
SPOKE 1 · Earned   →   HUB · Owned Media   ←   SPOKE 2 · Paid
(신뢰도 증폭)             (Single Source of Truth)   (트래픽 모터)
                              ↑ Closed-Loop
                    모든 외부 신호가 Hub로 수렴
```

**핵심 원칙: Hub ≠ Owned 콘텐츠의 일부. Hub = Owned Media 전체.**

| 티어 | 정의 | 최적화 레이어 | 방향 |
|------|------|-------------|------|
| **Hub = Owned** | 기업 통제 자산 (웹사이트, 기술 블로그, 백서) | SEO + AEO + GEO 직접 적용 | 중심 |
| **Spoke 1 = Earned** | PR, 인플루언서, 커뮤니티 | GEO↑ (Co-occurrence) + AEO↑ (PAA 시딩) | → Hub |
| **Spoke 2 = Paid** | SEM, 소셜광고, 랜딩페이지 | AEO 랜딩 구조 + SEM SEO 공백 보완 | → Hub |

### 7.2 Hub 내부 콘텐츠 분류

```
Hub (Owned Media)
├─ Primary 콘텐츠: SEO롱폼, GEO엔티티, AEO FAQ
│   → SEO + AEO + GEO 3중 레이어 직접 적용
└─ Derived 콘텐츠: 지원아티클, FAQ확장, 케이스스터디
    → SEO + Hub 내부링크 의무화
    ⚠️ "Spoke 파생 콘텐츠"라 불리지만 Earned/Paid와 동급의 독립 미디어가 아님
```

### 7.3 ForgeWorkflow 연결

```
CEP → buildForgeWorkflow(context, strategyType, executionPlan)
    → ForgeWorkflowPlan
        hub[]:          primary + derived (hubRole 구분)
        spoke1_earned[]: Earned 아이템
        spoke2_paid[]:   Paid 아이템
    → ForgeStudio Campaign Architecture 패널에서 선택 → FORGE 생성
```

---

## 8. AEGIS FORGE — 콘텐츠 생성 엔진

### 8.1 서브타입 목록

| 미디어 | 서브타입 | 설명 | 목표 길이 |
|--------|---------|------|---------|
| Owned Hub | `seo_longform` | SEO 롱폼 아티클 | 2000자 |
| Owned Hub | `aeo_faq` | AEO FAQ 가이드 + JSON-LD | 1000자 |
| Owned Hub | `geo_entity` | GEO 엔티티 권위글 | 2000자 |
| Owned Spoke | `support_article` | Hub 보완 지원아티클 | 1000자 |
| Owned Spoke | `faq_expansion` | FAQ 심화 확장글 | 600자 |
| Owned Spoke | `case_study` | 케이스 스터디 | 1000자 |
| Earned | `press_release` | 보도자료 | 1000자 |
| Earned | `influencer_brief` | 인플루언서 협업 브리프 | 600자 |
| Earned | `community_post` | 커뮤니티 게시물 | 600자 |
| Paid | `search_ad` | 검색광고 RSA | 300자 |
| Paid | `social_ad` | 소셜광고 3종 세트 | 300자 |
| Paid | `landing_copy` | 랜딩페이지 카피 | 600자 |

### 8.2 FORGE 핵심 설계 결정

- **Plain text 생성**: JSON 스키마 미사용 → 한국어 긴 콘텐츠 파싱 실패 방지
- **전략 앵커**: ExecutionPlan의 situationSummary/hubContent가 프롬프트 앵커 → 고온도(0.85)에서도 전략 방향 유지
- **미디어별 SEO/AEO/GEO 레이어 분기**: Hub/Earned/Paid 각각 다른 레이어 적용
- **Paid 변형 파싱**: `=== 변형A ===` 구분자 기반 3종 A/B/C 분리

---

## 9. Deterministic Data Pipeline (v2.7 신규)

### 9.1 현행 문제 (Gemini Grounding 한계)

```
환각 엔진 3곳:
1. "Simulate Top 10 SERP results" → 브랜드 언급 수 AI 조작
2. estimatedTotalResults → AI가 검색량 발명
3. naverQueryVolume/googleQueryVolume → 순수 AI 추정
4. site:blog.naver.com → Gemini Google Search는 Naver 크롤링 불가
```

### 9.2 목표 아키텍처

```
[Phase 1] 실제 API 수집
├─ Serper.dev → Google SERP + Featured Snippet + PAA + AI Overview
└─ Naver Search API + Naver 검색광고 API → 검색량(구간값) + 블로그/뉴스

[Phase 2] AI 역할 재정의 (RAG)
├─ 기존: AI가 검색량/브랜드 점유율 발명
└─ 신규: 실제 데이터 주입 → AI는 시맨틱 클러스터링만

[Phase 3] 캐싱 (7일 TTL)
└─ Supabase/PostgreSQL → API 원가 절감
```

### 9.3 현재 구현 상태

| 항목 | 상태 |
|------|------|
| `services/dataCollection/types.ts` | ✅ API 타입 정의 완료 |
| `services/dataCollection/serperClient.ts` | ✅ Serper.dev 클라이언트 스텁 |
| `services/dataCollection/naverClient.ts` | ✅ Naver Search + Ad API 스텁 |
| `services/dataCollection/pipeline.ts` | ✅ 오케스트레이터 + countBrandMentions() |
| `suggestContexts()` RAG Mode | ✅ serpData 주입 시 자동 전환 |
| `dataProvenance` UI 배지 | ✅ amber(추정) / emerald(실측) |
| 실제 API 키 연동 | ⏳ env: SERPER_API_KEY, NAVER_* 발급 후 즉시 적용 가능 |

### 9.4 AEO/GEO 트리거 로직 (v2.7)

```
serpFeatureFlags.hasFeaturedSnippet = true → AEO 전략 배지 '✓ SERP 데이터'
serpFeatureFlags.hasAIOverview      = true → GEO 전략 배지 '✓ SERP 데이터'
전략 로직 (defensive/niche)                → 'strategy_heuristic' 배지 (파랑)
```

---

## 10. Temporal Intelligence — 시계열 비교 분석

### 10.1 CEP 매칭 알고리즘 (v2.7 개선)

**문제**: Jaccard 유사도가 AI 생성 텍스트에 부적합 (임계값 0.25 → 대부분 소멸+신규 처리)

**해결책**: Multi-signal 스코어링 + 임계값 하향 (0.25 → 0.12)

```
score = textSim × 0.50          (multi-field: clusterName+situation+queryGroup+description)
      + kwSim   × 0.15          (keyword overlap, 없으면 0)
      + cognitionBonus (+0.12)  (같은 지배 인지 유형)
      + stageBonus     (+0.08)  (같은 CDJ 단계)
      + priorityBonus  (+0.06)  (Priority Score ±25pt 이내)

threshold: 0.12 (was 0.25)
```

**효과**: "남성 스킨케어 성분 분석" vs "남성 화장품 효능 비교"
- 이전: Jaccard 0.14 → 임계값 미달 → 소멸+신규
- 이후: textSim 0.07 + cognitionBonus 0.12 + stageBonus 0.08 = 0.27 → 매칭 성공

### 10.2 Sankey 다이어그램

- 흐름 선 중간에 **매칭 신뢰도 배지** 표시 (초록=40%+, 보라=20~39%, 앰버=12~19%)
- `matchDetail` 필드: 점수 구성 요소별 디버깅 데이터 저장

---

## 11. 주요 기능 목록

### 11.1 핵심 분석

| 기능 | 상태 |
|------|------|
| 키워드 → 최대 15개 CEP 추출 | ✅ |
| Brand SOV + 1:1/1:n 경쟁 강도 정규화 | ✅ |
| Cognition 분류 + CognitionVector | ✅ |
| Priority Score 산출 | ✅ |
| dataProvenance 'api'/'grounding_estimate' | ✅ |
| SerpFeatureFlags (AEO/GEO 트리거) | ✅ |

### 11.2 시각화

| 기능 | 상태 | 컴포넌트 |
|------|------|---------|
| **CDJ Journey Ladder** | ✅ | `CDJLadderView` |
| **Strategic Heatmap** (Context×Cognition) | ✅ | `ContextCognitionMatrix` |
| **Similarity Network** (ForceGraph) | ✅ | `ContextForceGraph` |
| CognitionVectorBars (ContextModal 인라인) | ✅ | inline |
| CognitionRadialGraph (키워드 방사형) | ✅ | `CognitionRadialGraph` |
| SankeyDiagram (시계열 + 매칭 신뢰도) | ✅ | `SankeyDiagram` |
| **3-Tab 가로 탭 (v2.7)** | ✅ | `App.tsx` |
| **PDF 출력 — 3종 시각화 세로 스택 (v2.7)** | ✅ | `PrintAnalysisViz` |

### 11.3 전략 수립

| 기능 | 상태 |
|------|------|
| 5 Strategy 자동 분류 | ✅ |
| actionPlan 한국어 생성 + ContextModal 표시 | ✅ |
| ExecutionPlan (Hub/Spoke/SEO/AEO/GEO) | ✅ |
| ForgeWorkflowPlan (3-tier Campaign Architecture) | ✅ |
| StrategicBrief — 탭 없이 전체 노출 (v2.7) | ✅ |
| Hub & Spoke Closed-Loop 다이어그램 | ✅ |

### 11.4 AEGIS FORGE

| 기능 | 상태 |
|------|------|
| Campaign Architecture 패널 (Hub/Spoke1/Spoke2) | ✅ |
| 미디어별 SEO/AEO/GEO 레이어 분기 | ✅ |
| AEO FAQ JSON-LD 스키마 템플릿 출력 | ✅ |
| Earned GEO (Co-occurrence + 인용 문구) | ✅ |
| Earned AEO (PAA 시딩) | ✅ |
| Paid AEO (랜딩 직접 답변 구조) | ✅ |
| Paid 광고 카피 SEO 노이즈 제거 | ✅ |

### 11.5 Temporal Intelligence

| 기능 | 상태 |
|------|------|
| 비교 모드 (Period A vs B) | ✅ |
| Multi-signal CEP 매칭 (임계값 0.12) | ✅ |
| Sankey 매칭 신뢰도 배지 | ✅ |
| AI 시계열 인사이트 5종 필터 | ✅ |
| Sankey SVG 다이어그램 | ✅ |

---

## 12. 컴포넌트 인벤토리

### 12.1 페이지 레벨

| 컴포넌트 | 역할 |
|---------|------|
| `App.tsx` | 루트, 상태 관리, 3-Tab Viz, PrintAnalysisViz portal |
| `BattleFieldForm` | 키워드·브랜드·경쟁사 입력 + v2.7 기능 설명 칩 |
| `SearchConfigPanel` | 검색 설정 |
| `ContextModal` | CEP 상세 분석 (3섹션 수직 레이아웃) |
| `ForgeStudio` | AEGIS FORGE 콘텐츠 생성 UI |

### 12.2 시각화

| 컴포넌트 | 역할 | 상태 |
|---------|------|------|
| `CDJLadderView` | CDJ 4컬럼 Ladder | v2.6+ |
| `ContextCognitionMatrix` | Context×Cognition 히트맵 | 유지 |
| `ContextForceGraph` | 유사도 네트워크 | 유지 |
| `CognitionRadialGraph` | 키워드 방사형 (전폭 확장) | v2.7 |
| `SankeyDiagram` | 시계열 플로우 + 신뢰도 배지 | v2.7 |
| `PrintAnalysisViz` | PDF 출력 3종 세로 스택 | **v2.7 신규** |
| ~~`StrategicMap`~~ | 2-depth 래퍼 → 레거시 | deprecated |

### 12.3 전략 수립

| 컴포넌트 | 역할 | 상태 |
|---------|------|------|
| `StrategicBrief` | Hub & Spoke 탭 없이 전체 노출 | **v2.7 수정** |
| `ForgeStudio` | Campaign Architecture 3-tier | v2.7 |
| `PrintReport` | CEP 단위 A4 보고서 | 유지 |

---

## 13. UI/UX 레이아웃 명세

### 13.1 메인 화면 (BattleFieldForm)

```
[MAPHACK 로고] ─── [다크모드] [📚] [🎯] [?]

[히어로 섹션]
  C³ Cube Strategy Intelligence Engine
  
  키워드 입력 → CEP 분석 → CDJ Ladder → 5 Strategy → Hub & Spoke → FORGE
  
  [기능 칩 8개: CEP분석 / CDJ Ladder / 5 Strategy / Hub&Spoke / SEO·AEO·GEO / AEGIS FORGE / Temporal Analysis / Brand SOV]

[Step 01] Define Your Battle Field
  카테고리 (필수) / 브랜드 / 경쟁사 + AI SOV 안내

[Step 02] Configure Data Source & Scope
  소스 설정 + 분석 기간
  
[Execute 버튼]
```

### 13.2 분석 결과 화면 헤더

```
C³ Cube Strategy Model :// {카테고리}

CEP 분석 → CDJ Ladder → 5 Strategy → Hub & Spoke (Owned · Earned · Paid × SEO·AEO·GEO) → AEGIS FORGE

[동적 뱃지: N개 전략 신호 / 지배Cognition / 전략유형 / Avg Xpt / 기간]
```

### 13.3 3-Tab 시각화 (v2.7)

```
[Journey Ladder] [Strategic Heatmap] [Similarity Network]  [PDF 출력]
     ↓                  ↓                    ↓
  CDJLadderView   ContextCognitionMatrix  ContextForceGraph
```

PDF 출력 시: 3종 세로 스택 (`PrintAnalysisViz` portal)

### 13.4 ContextModal 레이아웃 (v2.7 수직 재설계)

```
[스티키 헤더: 01 컨텍스트 분석 → 02 AI 트리플 미디어 전략 → 03 AEGIS FORGE]

SECTION 01 · 컨텍스트 분석
  Row A: ContextSelector + SERP피처  |  CognitionVectorBars (2열)
  Row B: 키워드 심층 분석 (전폭, minHeight 360px)
  Row C: Fact Reading + 전략적 시사점 (2열, 클라이언트 분석)

SECTION 02 · AI 트리플 미디어 전략
  Closed-Loop 다이어그램 (Spoke1 → Hub ← Spoke2)
  Strategic Context
  HUB · Owned Media (기본 펼침, 접기 가능)
  SPOKE 1 · Earned Media (기본 펼침)
  SPOKE 2 · Paid Media (기본 펼침)
  KPI Framework

SECTION 03 · AEGIS FORGE
  Campaign Architecture 패널 (3-tier: Hub 전폭 + Spoke1/2 나란히)
  Step 01: 미디어 유형 선택
  Step 02: 콘텐츠 유형 + 최적화 레이어
  [생성 → 출력]
```

---

## 14. 검색 설정 시스템

```typescript
interface SearchConfig {
  sources: SearchSource[];
  depth: { google: number; naver: number };  // 1~5
  period: AnalysisPeriod;    // '1w'|'1m'|'3m'|'6m'|'1y'
  dateRange: DateRange | null;
  comparisonMode: boolean;
  periodA: AnalysisPeriod;  periodB: AnalysisPeriod;
  dateRangeA: DateRange | null;  dateRangeB: DateRange | null;
}
```

---

## 15. 통계적 대표성 및 토큰 원가 분석

*(v2.6 이후 변경 없음 — 기존 분석 유효)*

---

## 16. 유료화 과금 체계 설계

*(v2.6 이후 변경 없음 — 기존 설계 유효)*

---

## 17. 디자인 시스템

### 색상 팔레트

| 토큰 | Light | Dark | 용도 |
|------|-------|------|------|
| `indigo-500` | #5B52F5 | — | Primary CTA |
| `indigo-600` | #4A40DC | — | Hover |
| `slate-900` | #131230 | — | 텍스트 |
| `teal-500` | #14B89B | — | Accent |

### 전략 유형 색상

| 전략 | 색상 | 적용 |
|------|------|------|
| Offensive (공격) | `rose` | CEP 카드, 전략 배지 |
| Defensive (방어) | `indigo` | CEP 카드, 전략 배지 |
| Niche Capture | `amber` | CEP 카드, 전략 배지 |
| Brand Build | `emerald` | CEP 카드, 전략 배지 |
| Monitor | `slate` | CEP 카드, 전략 배지 |

---

## 18. 파일 구조

```
c3-cube-strategy-model/
├── App.tsx                          # 루트, 3-Tab vizMode
├── index.html                       # @media print 스타일 포함
│
├── ai/
│   ├── gemini.ts                    # CEP 추출 (RAG/Grounding), FORGE 함수들
│   ├── forge.ts                     # FORGE 콘텐츠 생성 엔진 (미디어별 레이어 분기)
│   ├── keywords.ts                  # 키워드 심층 분석
│   └── geminiClient.ts
│
├── components/
│   ├── App.tsx-level:
│   │   ├── CDJLadderView.tsx        # Journey Ladder 시각화
│   │   ├── ContextCognitionMatrix.tsx # Strategic Heatmap
│   │   ├── ContextForceGraph.tsx    # Similarity Network
│   │   └── PrintAnalysisViz.tsx     # PDF 출력 3종 세로 스택 [v2.7 신규]
│   │
│   ├── CEP 상세:
│   │   ├── ContextModal.tsx         # 3섹션 수직 레이아웃 [v2.7 재설계]
│   │   ├── StrategicBrief.tsx       # 탭 없이 전체 노출 [v2.7 수정]
│   │   ├── ForgeStudio.tsx          # Campaign Architecture + FORGE
│   │   └── CognitionRadialGraph.tsx # 키워드 방사형 (전폭)
│   │
│   ├── 기타:
│   │   ├── BattleFieldForm.tsx      # 초기 입력 화면 [v2.7 설명 업데이트]
│   │   ├── ContextList.tsx          # CEP 카드 목록 + estimated 배지
│   │   ├── SankeyDiagram.tsx        # 시계열 + 매칭 신뢰도 배지
│   │   ├── PrintReport.tsx          # CEP 단위 A4 보고서
│   │   ├── StrategyBlockCard.tsx    # 전략 블록 카드 (5Strategy 매핑)
│   │   └── StrategicMap.tsx         # [deprecated] 2-depth 래퍼
│
├── content/
│   ├── forgeWorkflow.ts             # ForgeWorkflowPlan 빌더 [v2.7 3-tier]
│   └── blueprint.ts                 # ContentBlueprint 템플릿
│
├── core/
│   ├── context.ts                   # 타입 정의 (dataProvenance, SerpFeatureFlags, MarketSignal)
│   ├── analysis/
│   │   ├── temporalComparison.ts    # Multi-signal CEP 매칭 [v2.7 개선]
│   │   ├── strategy.ts              # 5 Strategy 분류 + 한국어 실행 방향
│   │   └── ...
│   └── types/
│       ├── forgeWorkflow.ts         # ForgeWorkflowPlan 타입 [v2.7 3-tier]
│       └── contentGeneration.ts
│
├── services/
│   ├── brandShareEngine.ts          # 1:1/1:n 경쟁 강도 정규화
│   └── dataCollection/              # [v2.7 신규] Deterministic Data Pipeline
│       ├── types.ts                 # SerpApiPayload, EnrichedKeyword 등
│       ├── serperClient.ts          # Serper.dev Google SERP 클라이언트
│       ├── naverClient.ts           # Naver Search + 검색광고 API
│       └── pipeline.ts              # 오케스트레이터 + countBrandMentions()
│
└── PROJECT_AEGIS_FULL_SPEC.md       # 본 문서 v2.7
```

---

## 19. v2.6 → v2.7 변경 이력

### 아키텍처

| 변경 | 내용 |
|------|------|
| **Hub & Spoke 구조 재정의** | 4-tier(hub/spoke/earned/paid) → 3-tier(hub/earned/paid). Owned 내부는 hubRole('primary'/'derived')로만 구분 |
| **Hub 방향성 수정** | `Hub → Spoke` 화살표 → `Spoke1 → Hub ← Spoke2` Closed-Loop |
| **Deterministic Data Pipeline** | services/dataCollection/ 신규 (Serper + Naver API 스텁, RAG Mode) |

### AI/로직

| 변경 | 내용 |
|------|------|
| **FORGE 미디어별 레이어 분기** | Owned Hub/Earned/Paid 각각 다른 SEO/AEO/GEO 함수 적용 |
| **AEO FAQ JSON-LD** | buildHubAEOLayer()에 스키마 마크업 템플릿 추가 |
| **Earned GEO** | Co-occurrence + 인용 문구 + 인플루언서 Must-Use Phrases |
| **Paid AEO** | 랜딩 직접답변구조 + 비교표 + FAQ |
| **Temporal 매칭 임계값** | 0.25 → 0.12, Multi-signal 스코어링 추가 |

### UI/UX

| 변경 | 내용 |
|------|------|
| **ContextModal 레이아웃** | 3열 그리드 → 3섹션 수직 흐름 (분석→전략→FORGE) |
| **StrategicBrief 탭 제거** | HUB/SPOKE1/SPOKE2 탭 → 기본 펼침 + 개별 접기 가능 |
| **키워드 심층분석 확장** | 1/3폭 → 전폭 (minHeight 360px) |
| **Fact Reading 카드 신규** | 클라이언트 분석 (AI 추가 호출 없음): 지배 인지 해석 + 키워드 분포 + 시사점 |
| **FORGE 상시 노출** | "FORGE 실행" 버튼 제거, 항상 하단 표시 |
| **3-Tab Viz** | Journey Ladder / Strategic Heatmap / Similarity Network + PDF 출력 버튼 |
| **PrintAnalysisViz** | PDF 3종 세로 스택 (force graph → 클러스터 테이블로 대체) |
| **Sankey 신뢰도 배지** | 매칭 흐름 선에 % 배지 |
| **BattleFieldForm 설명** | 전체 파이프라인 흐름 + 기능 칩 8개 |
| **결과 헤더 태그라인** | 파이프라인 플로우 화살표 표시 |

---

## 20. v2.7 → v2.8 변경 이력

### 데이터 파이프라인 (실제 가동)

| 변경 | 내용 |
|------|------|
| **Vite 프록시 설정** | `vite.config.ts`에 `/api/serper`, `/api/naver`, `/api/naver-ad` 프록시 추가 → 브라우저 CORS 문제 해결 |
| **Gemini 키 해석 강화** | `resolveApiKey()` 함수 신규 — `.env.local`의 `GEMINI_API_KEY` 우선 탐색, `VITE_API_KEY`·`process.env.API_KEY` 순 폴백 |
| **환경 변수 관리 체계화** | `.env.local` 단일 파일로 모든 API 키 관리 (`.env`는 키 이름 템플릿만 보관) |
| **Naver DataLab 트렌드 통합** | `fetchNaverDataLabTrendBatch()` 신규 — 12개월 상대 검색량 수집, 자동 방향 분석(rising/falling/stable/seasonal) |
| **EnrichedKeyword 확장** | `trendData?: NaverTrendData` 필드 추가 |
| **RAG 프롬프트 트렌드 반영** | 키워드 요약에 `trend`, `trendMomentum`, `trendRecentAvg` 포함 |
| **Context 트렌드 필드** | `trendDirection`, `trendMomentum`, `trendRecentAvg` 추가 |

### UI/UX

| 변경 | 내용 |
|------|------|
| **CEP 카드 배지 위치** | 데이터 출처 배지(실측 API/AI 추정값) → 카드 중앙에서 최하단으로 이동 |
| **ContextModal 트렌드 카드** | "검색 트렌드 (DataLab)" 섹션 신규 — ↑상승/↓하락/→안정/〜계절성 배지 + 모멘텀 % 표시 |
| **결과 헤더 태그라인** | `Serper·Naver 실측` 신규 추가 (파이프라인 시작 단계 시각화) |

### 인프라

| 변경 | 내용 |
|------|------|
| **serperClient.ts 엔드포인트** | 개발환경: `/api/serper/search` (Vite 프록시) / 프로덕션: `https://google.serper.dev/search` |
| **naverClient.ts 엔드포인트** | 검색/DataLab: `/api/naver/...` / 광고: `/api/naver-ad/...` |
| **vite.config.ts API_KEY 버그 수정** | `env.GEMINI_API_KEY` → `env.GEMINI_API_KEY || env.VITE_API_KEY || env.API_KEY` 순 폴백 |

---

*END OF DOCUMENT — Project AEGIS v2.8*
