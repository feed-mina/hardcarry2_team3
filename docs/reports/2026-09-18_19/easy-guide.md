# hardcarry2_team3 — easy-guide 쉬운 업데이트 설명

한국시간 2026년 9월 18~19일 업데이트 보고서. 활동 집계 마감은 9월 19일 21:24:15입니다.

게임·투표·일기 기능을 가진 React·Express 프로젝트입니다. 이번 기간에는 화면·서버·DB를 연결한 PDF와 HTML 인수인계 문서가 추가됐습니다.

| 항목 | 기준 |
|---|---|
| 보고서 범위 | 이번 기간의 변경과 관련 기능. 전체 시스템 설명은 아래 기존 상세 문서로 연결합니다. |
| 확인 브랜치 | master |
| 소스 기준 | `0ab83bc3b10e` |
| 검증 범위 | 모의 DB 분리 검사: sort 생략은 조회 0회·응답 0회, latest는 조회 1회·응답 1회였습니다. |
| 보고서 세트 | [쉬운 설명](easy-guide.md) · [수정·검증 지시](fix-guide.md) · [코드 인수인계](screen-code-handover.md) |

## 이번에 달라진 것

- 9월 18일 19:29, PR #1이 master에 병합됐습니다.
- 작업 도중 저장된 PDF와 HTML 수정 커밋을 하나의 문서 제작 작업으로 묶었습니다. 실제 앱 기능이 다섯 번 추가된 것으로 세지 않습니다.

## 1. 용어와 원리

| 용어 | 쉬운 뜻과 이번 작업에서의 역할 |
|---|---|
| Express | 주소별 HTTP 요청을 함수로 연결하는 Node.js 서버 도구입니다. |
| Pagination (쪽 나누기) | 목록을 일정 개수씩 나눠 가져오는 방식입니다. |
| Response (응답) | 서버가 요청자에게 보내는 결과입니다. 함수가 끝나도 응답을 보내지 않으면 화면은 계속 기다릴 수 있습니다. |

## 2. 익숙한 상황에 빗대어 보기

게시판 담당자가 정렬 주문을 받아 목록을 꺼내주는 구조입니다. 현재는 최신순·인기순이라고 말했을 때만 답하고, 정렬 주문을 빠뜨리면 답하지 않는 갈래가 있습니다.

이 비유는 역할을 이해하기 위한 설명입니다. 실제 저장·승인·실행 조건은 코드 인수인계 보고서를 기준으로 확인합니다.

## 3. 서로 어떻게 연결되는가

일기 목록 요청은 라우터에서 getDiary로 넘어가고, 정렬값에 따라 DB 조회 후 목록·페이지 수를 반환합니다. 이번 문서는 이 연결을 찾기 쉽게 했고, 보고서 검수에서는 정렬값 누락 분기를 따로 재현했습니다.

| 산출물 | 읽고 판단할 일 |
|---|---|
| easy-guide | 무엇이 달라졌고 어디까지 가능한지 이해 |
| fix-guide | 일기 조회에서 정렬값이 없을 때 응답이 빠지는 분기 |
| screen-code-handover | 화면·함수·입력·출력·저장 위치를 따라 유지보수 |

## 4. 직접 확인하는 순서

1. 기존 work-map HTML과 PDF의 역할을 확인합니다. 성공 기준: 화면에서 해당 API와 DB를 찾습니다.
2. 아래 fix-guide에서 정상 sort=latest와 정렬 생략을 비교합니다. 성공 기준: 조회·응답 횟수의 차이를 이해합니다.
3. 수정은 로컬 서버에서 검증합니다. 응답이 멈추면 sort 분기와 오류 응답 여부부터 확인합니다.

## 확인한 활동

| 한국시간 | 커밋 | 기록된 작업 | 구분 |
|---|---|---|---|
| 09/18 19:29 | [0ab83bc](https://github.com/feed-mina/hardcarry2_team3/commit/0ab83bc3b10e796f95a038cc076ae5b13ede1b6f) | Merge pull request #1 from feed-mina/copilot/create-handover-documentation | 병합 기록 |
| 09/18 19:18 | [c8e695e](https://github.com/feed-mina/hardcarry2_team3/commit/c8e695e0e8173745a830f4640282d2adc1b7c82f) | Generate screen-code handover PDF | 변경 기록 |
| 09/18 19:16 | [8648eb1](https://github.com/feed-mina/hardcarry2_team3/commit/8648eb1dbd580320d42dc356590b177eb5986017) | Draft handover HTML report | 변경 기록 |
| 09/18 19:08 | [bf43579](https://github.com/feed-mina/hardcarry2_team3/commit/bf43579092a9a6e8b22705f55aa46784baad6011) | Changes before error encountered | 변경 기록 |
| 09/18 18:58 | [7b04dd7](https://github.com/feed-mina/hardcarry2_team3/commit/7b04dd77a52bdacf8f90ffcf64e5b26d0b7edb84) | Changes before error encountered | 변경 기록 |

커밋은 파일 변경 기록이고 병합은 작업 브랜치를 합친 기록입니다. 둘을 별개의 기능 수로 세지 않습니다. 에이전트가 작성한 커밋도 사용자 저장소의 작업으로 포함했습니다.

## 기존 상세 자료

- [기존 HTML 작업 지도](https://github.com/feed-mina/hardcarry2_team3/blob/0ab83bc3b10e796f95a038cc076ae5b13ede1b6f/work-map-guide.html)
- [기존 인수인계 PDF](https://github.com/feed-mina/hardcarry2_team3/blob/0ab83bc3b10e796f95a038cc076ae5b13ede1b6f/hardcarry2_team3_screen_code_handover.pdf)
