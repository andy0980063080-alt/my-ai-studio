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
      "已建立創作需求！目前尚未連接真正的 AI 生成服務。";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert(page + " 功能將在後續版本開發。");
  }
                           }
