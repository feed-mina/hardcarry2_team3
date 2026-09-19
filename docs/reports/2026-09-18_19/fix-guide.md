# hardcarry2_team3 — fix-guide 수정·검증 지시

한국시간 2026년 9월 18~19일 업데이트 보고서. 활동 집계 마감은 9월 19일 21:24:15입니다.

게임·투표·일기 기능을 가진 React·Express 프로젝트입니다. 이번 기간에는 화면·서버·DB를 연결한 PDF와 HTML 인수인계 문서가 추가됐습니다.

| 항목 | 기준 |
|---|---|
| 보고서 범위 | 이번 기간의 변경과 관련 기능. 전체 시스템 설명은 아래 기존 상세 문서로 연결합니다. |
| 확인 브랜치 | master |
| 소스 기준 | `0ab83bc3b10e` |
| 검증 범위 | 모의 DB 분리 검사: sort 생략은 조회 0회·응답 0회, latest는 조회 1회·응답 1회였습니다. |
| 보고서 세트 | [쉬운 설명](easy-guide.md) · [수정·검증 지시](fix-guide.md) · [코드 인수인계](screen-code-handover.md) |

## 0. 식별과 상태

**일기 조회에서 정렬값이 없을 때 응답이 빠지는 분기**

[2026-09-18~19 KST / backend/controllers/back-diary.js (5,745바이트, 158줄, 파일 지문 399566daea01) / master]

상태: **모의 DB를 사용한 함수 분리 검사로 재현**. 이번 변경은 보고서 작성이며, 아래 애플리케이션 수정이나 운영 작업은 실행하지 않았습니다.

## 1. 현상

| 기대 | 확인한 실제 상태 |
|---|---|
| 잘못되거나 빠진 정렬값에도 목록 또는 명확한 입력 오류가 응답돼야 합니다. | sort 생략 시 DB 호출과 응답이 모두 0회입니다. latest에서는 각각 1회입니다. |

## 2. 원인과 근거

getDiary가 latest와 popular만 처리하고 나머지 경로에는 응답을 보내지 않습니다.

[기준 소스 열기](https://github.com/feed-mina/hardcarry2_team3/blob/0ab83bc3b10e796f95a038cc076ae5b13ede1b6f/backend/controllers/back-diary.js)

## 3. 수정 위치

- backend/controllers/back-diary.js — getDiary
- backend/routes/api/diary.js — /getDiary

## 4. 수정 또는 확인 방법

1. 정렬값을 latest 기본값으로 둘지 잘못된 값으로 거부할지 정책을 정합니다. 아래 예시는 누락만 latest로 처리합니다.
2. 알 수 없는 정렬값에는 400 응답을 반환합니다.
3. 기존 latest/popular 분기의 정렬과 응답 구조를 보존합니다.

변경 전 코드:

```javascript
const { page, size, sort, keyword } = req.query;
```

제안하는 변경 예시:

```javascript
const { page, size, keyword } = req.query;
const sort = req.query.sort ?? "latest";
if (!["latest", "popular"].includes(sort)) {
  return res.status(400).json({ message: "sort must be latest or popular" });
}
```

예시는 제안이며 저장소 코드에 반영된 내용이 아닙니다.

## 5. 완료 기준

- [ ] 정렬 생략 요청은 latest와 같은 구조의 응답을 한 번 반환합니다.
- [ ] sort=unknown은 DB 조회 없이 400을 반환합니다.
- [ ] latest와 popular의 정상 목록 조회는 유지됩니다.

## 6. 검증 방법과 제출할 근거

분리 검사에서 DB 호출 수와 응답 수를 기록하고, 로컬 HTTP 테스트에서 상태코드·응답 본문까지 확인합니다. DB 실패의 500 응답도 유지되는지 확인합니다.

실행 결과·캡처·응답 본문 중 완료 기준에 해당하는 근거를 남깁니다. 미실행 항목은 완료로 표시하지 않습니다.
