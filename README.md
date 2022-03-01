# 파이널 프로젝트

## git 협업관련

먼저, 원본을 본인의 깃허브 계정으로 fork 한 후
로컬에서 fork한 repository를 git clone으로 가져오기

-> 세팅 후,

```bash
git remote add upstream <원본 repository주소>
```

명령어를 통해 upstream 연결

---

### 코드를 로컬에서 수정하고, 이를 원본에 반영하는 과정

<br>

**1. 원본 repo와 로컬 프로젝트 폴더 동기화**
<br>

```bash
git pull upstream
```

<br>

**2. 로컬에서 브랜치 생성 후 코딩**
<br>

```bash
git branch <브랜치명>

git checkout <브랜치명>
```

<br><br>

**3. 코딩 완료 후 commit 및 push**
<br>
git add, git commit 을 통한 로컬 커밋 작업 후

```bash
git push origin <브랜치명>
```

로컬에서, fork해온 repository 에 변경사항을 먼저 push하는 것

<br>
<br>

**4. 깃허브 본인 계정에 fork 해둔 repo에서 pull request 만들기**
<br>

상단에 노란색으로 방금 push한 브랜치에서 push 가 있었다는 알림 및 pull request를 생성하는 버튼이 생김

눌러서 pull request 제목 및 내용을 작성하고 create 해주면 됨(이를 메인에서 확인하고 confirm하면 원본 repo에 변경사항이 반영됨)
<br>
<br>

**5. 원본 저장소 변경 사항 각자 계정 repo로 당겨오기**
<br>

가장 최신 내용이 반영된 upstream 으로 부터 fetch

```bash
git fetch upstream
```

그 다음, 로컬 저장소 main 브랜치로 checkout 한 후에 merge 해줍니다.

```bash
git merge upstream/main
```

그리고 업데이트된 로컬 환경의 main 브랜치에 있는 내용을 본인의 깃허브 계정에 있는 origin repository에 push해주면, origin repository가 원본 repo 와 같은 버전으로 유지됩니다.

```bash
git push
```

<br>
<br>

**6. 사용한 브랜치 삭제하기**
<br>

원래는 각자 브랜치 생성 후 삭제가 번거로울 듯 해서 삭제하지 말고 업데이트하면서 작업하자고 말씀을 드렸었습니다. 근데 조사하다보니 이게 git을 사용하는 의미 자체에 좀 안맞는 생각이었습니다ㅠㅠㅠ 조금 번거로우시더라도, 브랜치 생성해서 특정 작업 단위가 완료된 후에는, 해당 브랜치를 삭제하고 다음 작업에 다시 또 브랜치를 파서 작업하는 방식으로 진행하는게 어떨까 합니다.

우선, 로컬에서 브랜치를 먼저 삭제해주시면 됩니다.(위에 말씀드린 5단계까지 잘 되셨다면, 아마 별다른 문제 없이 삭제되실겁니다!)

```bash
git branch -d <삭제하려는 브랜치명>
```

그리고 이렇게 해주시게 되면 origin repo 에는 사용하셨던 브랜치가 아마 삭제되지 않고 남아있을겁니다. 이걸 삭제하는 방법은 두가지 인데, 깃허브에서 브랜치 선택하는 선택창에서 View all branches로 들어가서 삭제하셔도 되고, 로컬에서 다음 코드를 통해 삭제하셔도 됩니다.

```bash
git push origin --delete <삭제하려는 브랜치명>
```
