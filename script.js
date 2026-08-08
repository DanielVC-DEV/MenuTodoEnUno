const menuData = [
    {
        id: "completos",
        title: "COMPLETOS",
        badge: "Nuestra especialidad",
        items: [
            { name: "Completo Italiano", price: "$2.990" },
            { name: "Completo Palta", price: "$2.990" },
            { name: "Completo Todo En Uno", price: "$2.990" },
            { name: "Completo vegetariano", price: "$2.990" },
            { name: "Hot dog", price: "$2.200" }
        ],
        footer: "¡Todos los agregados son a tu gusto!",
        extraFooter: {
            title: "AGREGADOS SIN COSTO PARA EL COMPLETO",
            content: "Tomate - Palta - Maíz - Lechuga - Chucruts - Salsa americana"
        }
    },
    {
        id: "premium",
        title: "PREMIUM",
        desc: '"Vienesas Premium – Porque tu completo merece lo mejor, con ingredientes seleccionados y sabor que se nota en cada mordisco."',
        items: [
            { name: "Vienesa Llanquihue", price: "$3.400" },
            { name: "As base queso", desc: "+2 agregados", price: "$4.700" },
            { name: "As", desc: "+3 agregados", price: "$4.700" }
        ],
        extraFooter: {
            title: "AGREGADOS SIN COSTO PARA EL COMPLETO",
            content: "Tomate - Palta - Maíz - Lechuga - Chucruts - Salsa americana"
        }
    },
    {
        id: "salados",
        title: "SANDWICHES",
        items: [
            { name: "Barros Luco", price: "$6.200" },
            { name: "Churrasco solo", desc: "(solo carne)", price: "$5.200" },
            { name: "Churrasco italiano", price: "$6.300" },
            { name: "Churrasco Palta", price: "$6.300" },
            { name: "Churrasco de pollo", desc: "+2 agregados", price: "$6.300" },
            { name: "Queso caliente", price: "$2.900" },
            { name: "Marraqueta palta", price: "$2.000" },
            { name: "Mechada sola", desc: "(solo carne)", price: "$5.200" },
            { name: "Mechada italiana", desc: "(o dos agregados)", price: "$6.200" }
        ],
        extraFooter: {
            title: "AGREGADOS SIN COSTO PARA EL COMPLETO",
            content: "Tomate - Palta - Maíz - Lechuga - Chucruts - Salsa americana"
        }
    },
    {
        id: "compartir",
        title: "PARA COMPARTIR",
        items: [
            { name: "Porción Papas Fritas", desc: "(260g) de papas fritas", price: "$3.700" },
            { name: "Papa XL o familiar", price: "$8.000" },
            { name: "Papa Chedar Tocino", price: "$7.000" },
            { name: "Chorrillana individual", price: "$8.500" },
            { name: "Chorrillana para 2", price: "$16.000" },
            { name: "Salchipapa", desc: "(250g de papas fritas)", price: "$4.000" },
            { name: "Empanadas de queso", desc: "(6 unidades)", price: "$3.500" }
        ]
    },
    {
        id: "platos",
        title: "PLATOS",
        items: [
            { name: "Lomo vetado", desc: "con papas fritas o ensalada + bebida o café", price: "$9.990" },
            { name: "Pechuga de pollo", desc: "con papas fritas o ensalada + bebida o café", price: "$8.990" }
        ]
    },
    {
        id: "tomar",
        title: "PARA TOMAR",
        items: [
            { name: "Bebida lata", price: "$1.600" },
            { name: "Bebida de medio", price: "$1.900" },
            { name: "Bebida energética", price: "$2.100" },
            { name: "Agua mineral", price: "$1.200" },
            { name: "Jugo natural de pulpa", price: "$1.800" },
            { name: "Jugo", price: "$1.500" },
            { name: "Café tradicional", price: "$1.400" },
            { name: "Té", price: "$1.400" },
            { name: "Milo", price: "$1.600" },
            { name: "Chocolate caliente", price: "$2.000" },
            { name: "Café capuchino", price: "$2.000" },
            { name: "Café mocachinno", price: "$2.000" }
        ]
    },
    {
        id: "agregados",
        title: "AGREGADOS",
        items: [
            { name: "Tocino", price: "$1.400" },
            { name: "Cebolla", price: "$800" },
            { name: "Queso", price: "$1.400" },
            { name: "Pepinillo", price: "$400" },
            { name: "Ají verde", price: "$400" },
            { name: "Champiñones", price: "$1.000" },
            { name: "Vienesa", price: "$700" }
        ]
    }
];

let currentPageIndex = 0;

function init() {
    const tabsContainer = document.getElementById('tabs');
    const pagesWrapper = document.getElementById('pages-wrapper');

    menuData.forEach((category, index) => {
        // Crear Tab
        const li = document.createElement('li');
        li.className = `tab-item ${index === 0 ? 'active' : ''}`;
        li.textContent = category.title;
        li.onclick = () => goToPage(index);
        tabsContainer.appendChild(li);

        // Crear Página
        const page = document.createElement('div');
        page.className = `page-content ${index === 0 ? 'active' : ''}`;
        page.id = `page-${index}`;

        let html = '';
        
        let wrapperClass = category.isDark ? 'dark-panel' : (category.isBoxed ? 'boxed-panel' : '');
        
        if(category.isDark) {
             page.style.backgroundColor = 'var(--dark-panel)';
        }

        if(category.isBoxed) {
             html += `<div style="border: 2px dashed var(--text-main); padding: 15px; border-radius: 8px;">`;
        }

        html += `<h2 class="category-title ${category.isDark ? 'dark-text' : ''}">
                    ${category.title}
                    ${category.badge ? `<span class="badge-star">${category.badge}</span>` : ''}
                 </h2>`;
                 
        if (category.desc) {
            html += `<p class="category-desc">${category.desc}</p>`;
        }

        html += `<div class="item-list">`;
        category.items.forEach(item => {
            html += `
                <div class="item">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
                    </div>
                    <div class="item-dots"></div>
                    <div class="item-price">${item.price}</div>
                </div>
            `;
        });
        html += `</div>`;

        if (category.footer) {
            html += `<div style="text-align:center; background:var(--dark-panel); color:white; padding:8px; border-radius:20px; font-size:0.8rem; font-weight:600; margin-top:20px;">${category.footer}</div>`;
        }

        if (category.isBoxed) {
             html += `</div>`;
        }

        if (category.extraFooter) {
            html += `
                <div class="extra-footer">
                    <h4>${category.extraFooter.title}</h4>
                    <p>${category.extraFooter.content}</p>
                </div>
            `;
        }

        html += `
            <div style="text-align: center; margin-top: 30px; padding-bottom: 20px;">
                <img src="logo.png" alt="Logo Todo En Uno" style="width: 120px; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
            </div>
        `;

        page.innerHTML = html;
        pagesWrapper.appendChild(page);
    });

    updateControls();
}

function openBook() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('book').classList.remove('hidden');
}

function goToPage(index) {
    if (index === currentPageIndex) return;

    const tabs = document.querySelectorAll('.tab-item');
    const pages = document.querySelectorAll('.page-content');
    
    // Direction of animation
    const isNext = index > currentPageIndex;

    // Current page exits
    const current = pages[currentPageIndex];
    current.classList.remove('active');
    // Force reflow
    void current.offsetWidth;
    
    // New page enters
    const next = pages[index];
    next.classList.remove('exit-left', 'exit-right');
    // Set initial position for new page
    next.style.transform = isNext ? 'translateX(50px)' : 'translateX(-50px)';
    
    setTimeout(() => {
        next.style.transform = '';
        next.classList.add('active');
    }, 50);

    // Update tabs
    tabs[currentPageIndex].classList.remove('active');
    tabs[index].classList.add('active');
    
    // Scroll tabs smoothly to make active tab visible
    tabs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    currentPageIndex = index;
    updateControls();
}

function prevPage() {
    if (currentPageIndex > 0) {
        goToPage(currentPageIndex - 1);
    }
}

function nextPage() {
    if (currentPageIndex < menuData.length - 1) {
        goToPage(currentPageIndex + 1);
    }
}

function updateControls() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicator = document.getElementById('page-indicator');

    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === menuData.length - 1;
    indicator.textContent = `${currentPageIndex + 1} / ${menuData.length}`;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
