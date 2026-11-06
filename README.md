
<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ffffff">
<title>My AI Studio 2.0</title>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, "Noto Sans TC", sans-serif;
  background: #f7f8fc;
  color: #202432;
}

header {
  height: 68px;
  background: white;
  border-bottom: 1px solid #eeeeF2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: #5146e5;
}

.logo span {
  color: #25283a;
}

.profile {
  background: #f0efff;
  color: #5146e5;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  font-weight: bold;
}

main {
  max-width: 1000px;
  margin: auto;
  padding: 25px 18px 100px;
}

.hero {
  background: white;
  padding: 30px 22px;
  border-radius: 20px;
  border: 1px solid #ececf3;
  margin-bottom: 28px;
}

.tag {
  color: #6558e8;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  font-size: 29px;
  margin: 13px 0;
  line-height: 1.4;
}

.hero p {
  color: #858a9b;
  font-size: 14px;
  line-height: 1.8;
}

.search {
  margin-top: 23px;
  background: #f6f6fa;
  border: 1px solid #e9e9f0;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  gap: 10px;
}

.search input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  min-width: 0;
  font-size: 14px;
}

.section-title {
  font-size: 20px;
  font-weight: 750;
  margin-bottom: 17px;
}

.categories {
  display: flex;
  gap: 9px;
  overflow-x: auto;
  padding-bottom: 18px;
}

.category {
  border: 1px solid #e8e8ef;
  background: white;
  padding: 9px 16px;
  border-radius: 20px;
  white-space: nowrap;
  color: #666b7b;
  cursor: pointer;
}

.category.active {
  background: #5146e5;
  color: white;
  border-color: #5146e5;
}

.tools {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
}

.tool {
  background: white;
  border: 1px solid #ececf2;
  border-radius: 16px;
  padding: 17px 14px;
  min-height: 160px;
  cursor: pointer;
  transition: .2s;
}

.tool:active {
  transform: scale(.97);
}

.tool-icon {
  width: 47px;
  height: 47px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  font-size: 24px;
  margin-bottom: 13px;
}

.tool h3 {
  font-size: 15px;
  margin-bottom: 7px;
}

.tool p {
  font-size: 12px;
  color: #9296a4;
  line-height: 1.6;
}

.purple { background: #f0edff; }
.blue { background: #eaf3ff; }
.orange { background: #fff1e7; }
.green { background: #e8f8ef; }
.pink { background: #ffedf4; }
.yellow { background: #fff8df; }

.empty {
  display: none;
  color: #888;
  text-align: center;
  padding: 35px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  background: white;
  border-top: 1px solid #eeeeF2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}

.nav-item {
  font-size: 12px;
  color: #8c90a0;
  text-align: center;
  cursor: pointer;
}

.nav-item strong {
  display: block;
  font-size: 19px;
  margin-bottom: 3px;
}

.nav-item.selected {
  color: #5146e5;
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(20, 22, 40, .45);
  z-index: 30;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.modal-box {
  background: white;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 450px;
}

.modal-box h2 {
  font-size: 21px;
  margin-bottom: 10px;
}

.modal-box p {
  color: #858a99;
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 16px;
}

textarea {
  width: 100%;
  height: 125px;
  border: 1px solid #e4e4ec;
  border-radius: 12px;
  padding: 13px;
  resize: vertical;
  outline: none;
  font: inherit;
  font-size: 14px;
}

textarea:focus {
  border-color: #5146e5;
}

.primary, .close {
  width: 100%;
  border: none;
  border-radius: 11px;
  padding: 13px;
  margin-top: 12px;
  cursor: pointer;
  font-size: 14px;
}

.primary {
  background: #5146e5;
  color: white;
  font-weight: bold;
}

.close {
  background: #f1f1f6;
  color: #555;
}

.notice {
  display: none;
  background: #f1efff;
  color: #5146e5;
  padding: 12px;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 12px;
  line-height: 1.6;
}

@media (min-width: 700px) {
  .tools {
    grid-template-columns: repeat(3, 1fr);
  }
  .hero h1 {
    font-size: 38px;
  }
}
</style>
</head>

<body>

<header>
  <div class="logo">My AI <span>Studio.</span></div>
  <div class="profile">AI</div>
</header>

<main>

<section class="hero">
  <div class="tag">MY AI STUDIO 2.0</div>
  <h1>讓創意，變成<br>無限可能。</h1>
  <p>你的專屬 AI 創作空間。<br>
  用簡單的操作，創造不同的作品。</p>

  <div class="search">
    <span>🔍</span>
    <input id="searchInput"
      type="search"
      placeholder="搜尋 AI 工具..."
      oninput="searchTools()">
  </div>
</section>

<section>
  <h2 class="section-title">AI 創作工具</h2>

  <div class="categories">
    <button class="category active"
      onclick="filterTools('all',this)">全部</button>
    <button class="category"
      onclick="filterTools('video',this)">影片</button>
    <button class="category"
      onclick="filterTools('image',this)">圖片</button>
    <button class="category"
      onclick="filterTools('audio',this)">音樂語音</button>
    <button class="category"
      onclick="filterTools('text',this)">文字</button>
  </div>

  <div class="tools" id="tools">

    <div class="tool" data-category="video"
      data-name="文字轉影片"
      onclick="openTool('文字轉影片','輸入文字描述，將創意轉換成影片。')">
      <div class="tool-icon purple">🎬</div>
      <h3>文字轉影片</h3>
      <p>輸入文字，生成 AI 影片</p>
    </div>

    <div class="tool" data-category="image"
      data-name="AI 圖片生成"
      onclick="openTool('AI 圖片生成','描述你想要的畫面，創造 AI 圖片。')">
      <div class="tool-icon blue">🎨</div>
      <h3>AI 圖片生成</h3>
      <p>將想像變成精美圖片</p>
    </div>

    <div class="tool" data-category="video"
      data-name="圖片轉影片"
      onclick="openTool('圖片轉影片','上傳圖片並描述希望出現的動態。')">
      <div class="tool-icon orange">🖼️</div>
      <h3>圖片轉影片</h3>
      <p>讓靜態圖片動起來</p>
    </div>

    <div class="tool" data-category="audio"
      data-name="AI 音樂生成"
      onclick="openTool('AI 音樂生成','描述音樂風格及情緒，創作音樂。')">
      <div class="tool-icon green">🎵</div>
      <h3>AI 音樂生成</h3>
      <p>創作專屬背景音樂</p>
    </div>

    <div class="tool" data-category="audio"
      data-name="AI 語音生成"
      onclick="openTool('AI 語音生成','輸入文字，轉換成語音。')">
      <div class="tool-icon pink">🎙️</div>
      <h3>AI 語音生成</h3>
      <p>文字轉換自然語音</p>
    </div>

    <div class="tool" data-category="text"
      data-name="AI 寫作助手"
      onclick="openTool('AI 寫作助手','描述需求，協助撰寫文章及故事。')">
      <div class="tool-icon yellow">✍️</div>
      <h3>AI 寫作助手</h3>
      <p>文章、故事及影片腳本</p>
    </div>

  </div>

  <div class="empty" id="empty">
    找不到符合條件的工具。
  </div>
</section>

</main>

<footer>
  <div class="nav-item selected" onclick="showPage('首頁',this)">
    <strong>⌂</strong>首頁
  </div>
  <div class="nav-item" onclick="showPage('創作',this)">
    <strong>✧</strong>創作
  </div>
  <div class="nav-item" onclick="showPage('作品庫',this)">
    <strong>▣</strong>作品庫
  </div>
  <div class="nav-item" onclick="showPage('我的',this)">
    <strong>♙</strong>我的
  </div>
</footer>

<div class="modal" id="modal">
  <div class="modal-box">
    <h2 id="modalTitle">AI 創作</h2>
    <p id="modalDesc">請輸入你的創作內容。</p>

    <textarea id="prompt"
      placeholder="例如：一艘小船航行在深海，海底出現巨大黑色怪物..."></textarea>

    <button class="primary" onclick="generate()">
      開始生成
    </button>

    <div class="notice" id="notice"></div>

    <button class="close" onclick="closeTool()">
      關閉
    </button>
  </div>
</div>

<script>
let selectedTool = "";

function openTool(name, desc) {
  selectedTool = name;
  document.getElementById("modalTitle").innerText = name;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("prompt").value = "";
  document.getElementById("notice").style.display = "none";
  document.getElementById("modal").style.display = "flex";
}

function closeTool() {
  document.getElementById("modal").style.display = "none";
}

function generate() {
  const prompt = document.getElementById("prompt").value.trim();
  const notice = document.getElementById("notice");

  if (!prompt) {
    notice.innerText = "請先輸入你的創作描述。";
  } else {
    notice.innerText =
      "已建立創作需求！目前這是介面展示版本，尚未連接真正的 AI 生成服務。下一階段將接入 AI API。";
  }

  notice.style.display = "block";
}

function filterTools(category, button) {
  document.querySelectorAll(".category").forEach(b =>
    b.classList.remove("active")
  );
  button.classList.add("active");

  let count = 0;

  document.querySelectorAll(".tool").forEach(tool => {
    const match = category === "all" ||
      tool.dataset.category === category;

    tool.style.display = match ? "block" : "none";
    if (match) count++;
  });

  document.getElementById("empty").style.display =
    count ? "none" : "block";
}

function searchTools() {
  const keyword = document.getElementById("searchInput")
    .value.toLowerCase().trim();

  let count = 0;

  document.querySelectorAll(".tool").forEach(tool => {
    const name = tool.dataset.name.toLowerCase();
    const match = name.includes(keyword);

    tool.style.display = match ? "block" : "none";
    if (match) count++;
  });

  document.getElementById("empty").style.display =
    count ? "none" : "block";

  document.querySelectorAll(".category").forEach(b =>
    b.classList.remove("active")
  );
}

function showPage(page, element) {
  document.querySelectorAll(".nav-item").forEach(item =>
    item.classList.remove("selected")
  );
  element.classList.add("selected");

  if (page === "創作") {
    document.querySelector(".section-title").scrollIntoView({
      behavior: "smooth"
    });
  } else if (page === "首頁") {
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    alert(page + " 功能將在後續版本開發。");
  }
}
</script>

</body>
</html>

