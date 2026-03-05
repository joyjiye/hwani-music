# 화니음악학원 홈페이지

## 파일 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 홈페이지 |
| `admin.html` | 관리자 전용 페이지 (Firebase Auth 로그인 필요) |
| `firebase-config.js` | Firebase 설정 |
| `firestore.rules` | Firestore 보안 규칙 (Firebase Console에 적용 필요) |
| `sitemap.xml` | 검색엔진 사이트맵 |
| `robots.txt` | 검색봇 크롤링 설정 |
| `netlify.toml` | Netlify 배포 설정 |

---

## 배포 방법 (Firebase Hosting)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# 배포 디렉토리: . (현재 폴더)
firebase deploy
```

배포 후 URL: `https://hwanimusicacademy.web.app`

---

## 네이버 스페이스 연동 방법

### 1단계: 네이버 서치어드바이저 등록

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속 및 로그인
2. **웹마스터 도구** → **사이트 추가** 클릭
3. URL 입력: `https://hwanimusicacademy.web.app`
4. **HTML 파일** 방식 또는 **HTML 태그** 방식 선택
   - HTML 파일: `navere5175e16959b866747913e1680460d8b.html` 이미 배포됨 ✓
   - HTML 태그: `index.html`에 `e5175e16959b866747913e1680460d8b` 코드 적용됨 ✓
5. **소유 확인** 클릭
6. **사이트맵 제출**: `https://hwanimusicacademy.web.app/sitemap.xml`

### 2단계: 네이버 스마트플레이스 등록

1. [네이버 스마트플레이스](https://smartplace.naver.com) 접속
2. **업체 등록** → 화니음악학원 검색 또는 신규 등록
3. 홈페이지 URL 입력: `https://hwanimusicacademy.web.app`
4. 등록 완료 후 업체 페이지 URL 복사

### 3단계: 관리자 페이지에서 URL 설정

1. `https://hwanimusicacademy.web.app/admin.html` 접속 후 로그인
2. **📍 네이버 스페이스** 탭 클릭
3. 네이버 지도 URL, 스마트플레이스 URL, 검색 URL 입력
4. **네이버 연동 정보 저장** 클릭
5. 홈페이지에 자동으로 반영됨

---

## 관리자 사용 방법

### 로그인
- URL: `https://hwanimusicacademy.web.app/admin.html`
- 이메일: `pupu0106@naver.com`
- 비밀번호: Firebase Authentication에서 설정한 비밀번호

### 관리 기능

| 탭 | 기능 |
|----|------|
| 📋 공지사항 | 공지 등록·수정·삭제 (이미지 자동 압축) |
| 🎵 음악이야기 | 음악이야기 등록·수정·삭제 (이미지 자동 압축) |
| 🎬 영상 관리 | 발표회·콩쿠르 영상 URL 등록 (YouTube embed URL 지원) |
| 📍 네이버 스페이스 | 네이버 지도·스마트플레이스·검색 URL 관리 |
| ⚙️ 학원 기본정보 | 학원명·전화·주소·운영시간 수정 |

### 이미지 업로드 주의사항
- 이미지는 자동으로 **800px 이하, JPEG 압축** 처리됩니다
- Firestore 문서 크기 제한(1MB)으로 인해 700KB 이하 권장
- 경고 표시 시 더 작은 이미지를 사용하세요

### 영상 등록 방법 (YouTube)
1. YouTube에서 영상 → **공유** → **퍼가기** 클릭
2. `src="..."` 안의 URL 복사 (예: `https://www.youtube.com/embed/xxxxx`)
3. 관리자 페이지 → 🎬 영상 관리 탭에 붙여넣기

---

## 수정된 오류 목록

| # | 오류 내용 | 수정 내용 |
|---|-----------|-----------|
| 1 | Firebase Auth SDK 누락 | `firebase-auth-compat.js` 추가 |
| 2 | top-bar 링크 미연결 (`href="#"`) | `href="#about"`, `href="#contact"` 연결 |
| 3 | 카카오맵 URL 한글 미인코딩 | URL 퍼센트 인코딩 적용 |
| 4 | 이미지 크기 제한 없음 | Canvas 자동 압축 기능 추가 (800px, JPEG 0.72) |
| 5 | 비디오 URL 관리 기능 없음 | 🎬 영상 관리 탭 추가 |
| 6 | 비디오 Firestore 연동 없음 | `loadVideos()` 함수 추가 |
| 7 | 네이버 등록 메타태그 없음 | naver-site-verification, OG태그, canonical 추가 |
| 8 | sitemap.xml 없음 | 신규 생성 |
| 9 | robots.txt 없음 | 신규 생성 |
| 10 | 네이버 인증 코드 임시값 | 실제 인증 코드 `e5175e16959b866747913e1680460d8b` 적용 |
| 11 | 네이버 스마트플레이스 연동 없음 | 홈페이지 네이버 섹션 추가 + 관리자 탭 추가 |
| 12 | 학원 정보 정적 하드코딩 | Firestore에서 동적 로드 (주소·전화·운영시간·인스타) |
