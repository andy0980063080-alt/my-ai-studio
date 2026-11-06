// My AI Studio - Video Module

function handleVideoGeneration(prompt) {
  if (!prompt || !prompt.trim()) {
    return "請先輸入影片描述。";
  }

  return "影片創作需求已收到！目前尚未連接真正的 AI 影片生成服務，後續會加入影片生成 API。";
}

// 圖片轉影片功能
function handleImageToVideo(image, prompt) {
  if (!image) {
    return "請先選擇一張圖片。";
  }

  return "圖片轉影片需求已建立，後續將加入真正的影片生成服務。";
}
