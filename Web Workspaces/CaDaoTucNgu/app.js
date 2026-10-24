const entries = [
  {
    kind: "Ca dao",
    category: "Quê hương",
    text: "Ta về ta tắm ao ta,\ndù trong dù đục ao nhà vẫn hơn.",
    meaning:
      "Câu ca đề cao sự gắn bó với những gì thân thuộc. Hình ảnh “ao nhà” thường được hiểu như một ẩn dụ về quê hương, nếp sống và bản sắc riêng.",
    context:
      "Có thể gặp dị bản “Ta về ta tắm ao ta / Dù trong dù đục ao nhà vẫn hơn”. Khi phân tích, nên đặt câu trong ngữ cảnh và lưu ý rằng cách hiểu không chỉ có một chiều.",
  },
  {
    kind: "Tục ngữ",
    category: "Gia đình",
    text: "Công cha như núi Thái Sơn,\nnghĩa mẹ như nước trong nguồn chảy ra.",
    meaning:
      "Dùng hai hình ảnh lớn lao, bền bỉ của thiên nhiên để diễn tả công ơn sinh thành, dưỡng dục của cha mẹ.",
    context:
      "Thường được truyền dạy trong gia đình và nhà trường như lời nhắc về lòng biết ơn, hiếu kính giữa các thế hệ.",
  },
  {
    kind: "Tục ngữ",
    category: "Lao động",
    text: "Có công mài sắt, có ngày nên kim.",
    meaning:
      "Khuyên con người kiên trì, bền chí; việc khó có thể thành nếu được theo đuổi bằng nỗ lực lâu dài.",
    context:
      "Câu nói dùng hình ảnh mài một vật liệu thô thành vật dụng nhỏ bé, hữu ích để nhấn mạnh sức mạnh của sự chuyên cần.",
  },
  {
    kind: "Ca dao",
    category: "Quê hương",
    text: "Đường vô xứ Nghệ quanh quanh,\nnon xanh nước biếc như tranh họa đồ.",
    meaning:
      "Gợi vẻ đẹp nên thơ của cảnh sắc xứ Nghệ qua nhịp thơ mềm mại và những hình ảnh giàu màu sắc.",
    context:
      "Lời ca thuộc mạch ca dao về cảnh đẹp quê hương. Văn bản và địa danh trong các lời hát có thể thay đổi theo vùng.",
  },
  {
    kind: "Tục ngữ",
    category: "Ứng xử",
    text: "Lời nói chẳng mất tiền mua,\nlựa lời mà nói cho vừa lòng nhau.",
    meaning:
      "Nhắc nhở về sự cân nhắc trong giao tiếp: lời nói nên chân thành, đúng mực và tôn trọng người nghe.",
    context:
      "Có thể liên hệ với phép lịch sự trong ứng xử, đồng thời không nên hiểu “vừa lòng” là phải né tránh mọi ý kiến khác biệt.",
  },
  {
    kind: "Tục ngữ",
    category: "Thiên nhiên",
    text: "Chuồn chuồn bay thấp thì mưa,\nbay cao thì nắng, bay vừa thì râm.",
    meaning:
      "Ghi lại kinh nghiệm dân gian quan sát hoạt động của chuồn chuồn để dự đoán thời tiết.",
    context:
      "Đây là tri thức kinh nghiệm hình thành từ quan sát tự nhiên, không thay thế dự báo khí tượng và có thể không đúng trong mọi điều kiện.",
  },
  {
    kind: "Tục ngữ",
    category: "Lao động",
    text: "Nhất nước, nhì phân, tam cần, tứ giống.",
    meaning:
      "Xếp thứ tự những yếu tố được xem là quan trọng trong canh tác lúa nước: nước, phân bón, sự chăm chỉ và giống.",
    context:
      "Câu tục ngữ phản ánh kinh nghiệm nông nghiệp truyền thống. Thứ tự ưu tiên có thể thay đổi theo thời kỳ và điều kiện sản xuất.",
  },
  {
    kind: "Ca dao",
    category: "Gia đình",
    text: "Anh em như thể tay chân,\nrách lành đùm bọc, dở hay đỡ đần.",
    meaning:
      "Ví tình anh em như các bộ phận trên một cơ thể, qua đó đề cao sự gắn bó và đùm bọc lẫn nhau.",
    context:
      "Lời ca thường được nhắc đến khi nói về tình thân và trách nhiệm trong gia đình.",
  },
  {
    kind: "Tục ngữ",
    category: "Ứng xử",
    text: "Uống nước nhớ nguồn.",
    meaning:
      "Khuyên con người ghi nhớ công lao của những người đi trước và nguồn cội đã tạo nên điều tốt đẹp mình đang thụ hưởng.",
    context:
      "Hình ảnh “nguồn” có thể gợi nguồn nước theo nghĩa đen và cội nguồn theo nghĩa biểu tượng.",
  },
  {
    kind: "Ca dao",
    category: "Quê hương",
    text: "Nhiễu điều phủ lấy giá gương,\nngười trong một nước phải thương nhau cùng.",
    meaning:
      "Mượn hình ảnh tấm nhiễu che chở chiếc giá gương để gửi gắm lời nhắn về tình tương thân, tương ái.",
    context:
      "Câu ca thường được hiểu như lời kêu gọi đoàn kết trong cộng đồng, đặc biệt giữa những người cùng quê hương, đất nước.",
  },
  {
    kind: "Tục ngữ",
    category: "Thiên nhiên",
    text: "Tháng bảy kiến bò, chỉ lo lại lụt.",
    meaning:
      "Là kinh nghiệm dân gian liên hệ hiện tượng kiến di chuyển với khả năng mưa lũ.",
    context:
      "Câu nói phản ánh cách người xưa quan sát môi trường sống; đây là kinh nghiệm truyền miệng, không phải quy luật dự báo chắc chắn.",
  },
  {
    kind: "Tục ngữ",
    category: "Lao động",
    text: "Đi một ngày đàng, học một sàng khôn.",
    meaning:
      "Khuyến khích trải nghiệm và học hỏi từ thế giới bên ngoài; mỗi chuyến đi có thể đem lại hiểu biết mới.",
    context:
      "Hình ảnh “sàng khôn” làm nổi bật giá trị của tri thức thu nhận qua giao tiếp, quan sát và trải nghiệm thực tế.",
  },
];

const grid = document.querySelector("#quote-grid");
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const dialog = document.querySelector("#detail-dialog");
const closeDialogButton = document.querySelector(".dialog-close");
let activeCategory = "Tất cả";

function getVisibleEntries() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");

  return entries
    .map((entry, index) => ({ ...entry, index }))
    .filter((entry) => {
      const matchesCategory =
        activeCategory === "Tất cả" || entry.category === activeCategory;
      const searchableText = [
        entry.text,
        entry.kind,
        entry.category,
        entry.meaning,
      ]
        .join(" ")
        .toLocaleLowerCase("vi");

      return matchesCategory && searchableText.includes(query);
    });
}

function renderEntries() {
  const visibleEntries = getVisibleEntries();
  grid.replaceChildren();
  emptyState.hidden = visibleEntries.length > 0;
  resultCount.textContent = `${visibleEntries.length} tư liệu`;

  for (const entry of visibleEntries) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "quote-card";
    card.setAttribute("aria-label", `Đọc chú giải: ${entry.text.replace("\n", " ")}`);

    const topLine = document.createElement("span");
    topLine.className = "card-topline";
    const category = document.createElement("span");
    category.className = "card-category";
    category.textContent = entry.category;
    const number = document.createElement("span");
    number.className = "card-number";
    number.textContent = String(entry.index + 1).padStart(2, "0");
    topLine.append(category, number);

    const quote = document.createElement("span");
    quote.className = "quote-text";
    quote.textContent = entry.text;

    const bottomLine = document.createElement("span");
    bottomLine.className = "card-bottom";
    const kind = document.createElement("span");
    kind.textContent = entry.kind;
    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    bottomLine.append(kind, arrow);

    card.append(topLine, quote, bottomLine);
    card.addEventListener("click", () => showEntry(entry));
    grid.append(card);
  }
}

function showEntry(entry) {
  document.querySelector("#dialog-category").textContent = entry.category;
  document.querySelector("#dialog-kind").textContent = entry.kind;
  document.querySelector("#dialog-title").textContent = entry.text;
  document.querySelector("#dialog-meaning").textContent = entry.meaning;
  document.querySelector("#dialog-context").textContent = entry.context;
  dialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderEntries();
  });
});

searchInput.addEventListener("input", renderEntries);

closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !dialog.open && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderEntries();
