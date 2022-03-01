# 파이널 프로젝트

## git 협업관련

먼저, 원본을 본인의 깃허브 계정으로 fork 한 후
로컬에서 fork한 repository를 git clone으로 가져오기

-> 세팅 후,

```bash
git remote add upstream <원본 repository주소>
```

명령어를 통해 upstream 연결

#### 코드를 로컬에서 수정하고, 이를 원본에 반영하는 과정

1. 원본 repo와 로컬 프로젝트 폴더 동기화

```bash
git pull upstream
```

2. 로컬에서 브랜치 생성 후 코딩

```bash
git branch <브랜치명>

git checkout <브랜치명>
```

3. 코딩 완료 후 commit 및 push
   git add, git commit 을 통한 로컬 커밋 작업 후

```bash
git push origin <브랜치명>
```

로컬에서, fork해온 repository 에 변경사항을 먼저 push하는 것
