export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // @TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      Cтраница добавления поста
      <div class="form">
        <h3 class="form-title">Добавить новый пост</h3>
        
        <div class="upload-image-container"></div>
        
        <div class="form-inputs">
          <p class="form-label">Опишите фотографию:</p>
          <textarea 
            class="input textarea" 
            id="description-input" 
            rows="4" 
            placeholder="Введите описание поста..."
          ></textarea>
        </div>
        
        <button class="button" id="add-button">Добавить</button>
      </div>
    </div>
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: "Описание картинки",
        imageUrl: "https://image.png",
      });
    });
  };

  render();
}
