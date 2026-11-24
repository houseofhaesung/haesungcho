# House of Haesung

Haesung Cho 포트폴리오 (Framer → Astro 이전)

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 사이트 생성
```

## 구조

```
src/
  data/site.ts         ← 텍스트, 프로젝트 목록, 경력 등 모든 콘텐츠
  styles/global.css    ← 색상·폰트 토큰, 헤더, 푸터, 페이지 전환
  layouts/Base.astro   ← 공통 레이아웃 + 전환 스크립트
  components/          ← Header, Footer
  data/projects.ts     ← 프로젝트 상세 페이지 내용과 이미지 배치
  components/Media.astro ← 이미지가 없으면 자리표시를 보여주는 컴포넌트
  pages/               ← index(메인), works, about, projects/[slug]
public/images/         ← 이미지 (현재는 스크린샷에서 잘라낸 임시본)
```

## 현재 상태

- 상단 메뉴로 페이지 이동, 이동 시 로고와 브랜드 컬러 베일이 나타났다 사라지는 전환
- 메인 표와 Works 카드 → 프로젝트 상세 페이지 (`/projects/<slug>/`)
- 상세 페이지 이미지는 자리표시 상태. 파일 목록은 `IMAGES.md` 참고
- 모바일에서는 이름 버튼을 누르면 메뉴가 열림

## TODO

- [ ] `public/images/` 를 Framer export 원본 이미지로 교체
- [x] 폰트 적용 (Playfair Display, Snell)
- [ ] 상세 페이지 고화질 이미지 넣기 (`IMAGES.md`)
- [ ] SEE MORE / DOWNLOAD 링크 주소 넣기 (`projects.ts` 의 `more.href`)
- [ ] Grandiflora 본문 텍스트
