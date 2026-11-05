(() => {
    "use strict";

    // =====================================
    // CONFIGURAÇÕES E DADOS INICIAIS
    // =====================================

    const STORAGE_KEY = "casasMoreiraBairrosFretes_v2";

    const initialEntries = [
        { id: "1", name: "Abolição", price: 90.00, status: "disponivel" },
        { id: "2", name: "Acari", price: 90.00, status: "disponivel" },
        { id: "3", name: "Água Santa", price: 90.00, status: "disponivel" },
        { id: "4", name: "Alto da Boa Vista", price: 100.00, status: "disponivel" },
        { id: "5", name: "Anchieta", price: 90.00, status: "disponivel" },
        { id: "6", name: "Andaraí", price: 100.00, status: "disponivel" },
        { id: "7", name: "Anil", price: 90.00, status: "disponivel" },
        { id: "8", name: "Austin", price: 90.00, status: "disponivel" },
        { id: "9", name: "Bancários (Ilha)", price: 100.00, status: "disponivel" },
        { id: "10", name: "Bangu", price: 90.00, status: "disponivel" },
        { id: "11", name: "Barra da Tijuca", price: 130.00, status: "disponivel" },
        { id: "12", name: "Barreira do Vasco", price: 100.00, status: "disponivel" },
        { id: "13", name: "Barros Filho", price: 100.00, status: "disponivel" },
        { id: "14", name: "Benfica", price: 100.00, status: "disponivel" },
        { id: "15", name: "Belford Roxo", price: 90.00, status: "disponivel" },
        { id: "16", name: "Bento Ribeiro", price: 90.00, status: "disponivel" },
        { id: "17", name: "Bonsucesso", price: 90.00, status: "disponivel" },
        { id: "18", name: "Borel", price: 100.00, status: "disponivel" },
        { id: "19", name: "Botafogo", price: 100.00, status: "disponivel" },
        { id: "20", name: "Brás de Pina", price: 90.00, status: "disponivel" },
        { id: "21", name: "Cabuçu (N. Iguaçu)", price: 100.00, status: "disponivel" },
        { id: "22", name: "Cachambi", price: 90.00, status: "disponivel" },
        { id: "23", name: "Cacuia (Nova Iguaçu)", price: 90.00, status: "disponivel" },
        { id: "24", name: "Cacuia (Ilha do Governador)", price: 100.00, status: "disponivel" },
        { id: "25", name: "Caju", price: 100.00, status: "disponivel" },
        { id: "26", name: "Camorim", price: 90.00, status: "disponivel" },
        { id: "27", name: "Campinho", price: 90.00, status: "disponivel" },
        { id: "28", name: "Campo dos Afonsos", price: 90.00, status: "disponivel" },
        { id: "29", name: "Campo Grande", price: 100.00, status: "disponivel" },
        { id: "30", name: "Campos Elíseos", price: 100.00, status: "disponivel" },
        { id: "31", name: "Cascadura", price: 90.00, status: "disponivel" },
        { id: "32", name: "Catete", price: 100.00, status: "disponivel" },
        { id: "33", name: "Catonho", price: 90.00, status: "disponivel" },
        { id: "34", name: "Catumbi", price: 100.00, status: "disponivel" },
        { id: "35", name: "Cavalcante", price: 100.00, status: "disponivel" },
        { id: "36", name: "Centro do Rio", price: 90.00, status: "disponivel" },
        { id: "37", name: "Cerâmica", price: 90.00, status: "disponivel" },
        { id: "38", name: "Chapadão", price: 100.00, status: "disponivel" },
        { id: "39", name: "Chaperó", price: 200.00, status: "disponivel" },
        { id: "40", name: "Cidade de Deus", price: 100.00, status: "disponivel" },
        { id: "41", name: "Cidade Universitária", price: 90.00, status: "disponivel" },
        { id: "42", name: "Cocotá (Ilha)", price: 100.00, status: "disponivel" },
        { id: "43", name: "Coelho da Rocha", price: 90.00, status: "disponivel" },
        { id: "44", name: "Coelho Neto", price: 90.00, status: "disponivel" },
        { id: "45", name: "Colégio", price: 90.00, status: "disponivel" },
        { id: "46", name: "Colônia", price: null, status: "indisponivel" },
        { id: "47", name: "Comendador Soares", price: 90.00, status: "disponivel" },
        { id: "48", name: "Complexo da Maré", price: 100.00, status: "disponivel" },
        { id: "49", name: "Copacabana", price: 100.00, status: "disponivel" },
        { id: "50", name: "Cordovil", price: 100.00, status: "disponivel" },
        { id: "51", name: "Cosme Velho", price: 90.00, status: "disponivel" },
        { id: "52", name: "Cosmos", price: 100.00, status: "disponivel" },
        { id: "53", name: "Costa Barros", price: 100.00, status: "disponivel" },
        { id: "54", name: "Curicica", price: 100.00, status: "disponivel" },
        { id: "55", name: "Del Castilho", price: 90.00, status: "disponivel" },
        { id: "56", name: "Deodoro", price: 90.00, status: "disponivel" },
        { id: "57", name: "Duque de Caxias", price: 90.00, status: "disponivel" },
        { id: "58", name: "Encantado", price: 90.00, status: "disponivel" },
        { id: "59", name: "Engenheiro Leal", price: 90.00, status: "disponivel" },
        { id: "60", name: "Engenheiro Pedreira", price: 150.00, status: "disponivel" },
        { id: "61", name: "Engenho da Rainha", price: 90.00, status: "disponivel" },
        { id: "62", name: "Engenho de Dentro", price: 90.00, status: "disponivel" },
        { id: "63", name: "Engenho Novo", price: 100.00, status: "disponivel" },
        { id: "64", name: "Estácio", price: 120.00, status: "disponivel" },
        { id: "65", name: "Fazenda Botafogo", price: 100.00, status: "disponivel" },
        { id: "66", name: "Flamengo", price: 100.00, status: "disponivel" },
        { id: "67", name: "Freguesia", price: 100.00, status: "disponivel" },
        { id: "68", name: "Galeão", price: 100.00, status: "disponivel" },
        { id: "69", name: "Gamboa", price: 90.00, status: "disponivel" },
        { id: "70", name: "Gardênia", price: 100.00, status: "disponivel" },
        { id: "71", name: "Gávea", price: 100.00, status: "disponivel" },
        { id: "72", name: "Glória", price: 90.00, status: "disponivel" },
        { id: "73", name: "Grajaú", price: 90.00, status: "disponivel" },
        { id: "74", name: "Gramacho", price: 90.00, status: "disponivel" },
        { id: "75", name: "Guadalupe", price: 90.00, status: "disponivel" },
        { id: "76", name: "Honório Gurgel", price: 90.00, status: "disponivel" },
        { id: "77", name: "Humaitá", price: 100.00, status: "disponivel" },
        { id: "78", name: "Ilha de Guaratiba", price: 200.00, status: "disponivel" },
        { id: "79", name: "Ilha do Governador", price: 100.00, status: "disponivel" },
        { id: "80", name: "Imbariê", price: 130.00, status: "disponivel" },
        { id: "81", name: "Inhaúma", price: 90.00, status: "disponivel" },
        { id: "82", name: "Ipanema", price: 100.00, status: "disponivel" },
        { id: "83", name: "Inhoaíba", price: 120.00, status: "disponivel" },
        { id: "84", name: "Irajá", price: 90.00, status: "disponivel" },
        { id: "85", name: "Itaguaí (depois do Centro)", price: 200.00, status: "disponivel" },
        { id: "86", name: "Itaguaí (até o Centro)", price: 180.00, status: "disponivel" },
        { id: "87", name: "Itanhangá", price: 130.00, status: "disponivel" },
        { id: "88", name: "Jacaré", price: 120.00, status: "disponivel" },
        { id: "89", name: "Jacarepaguá", price: 100.00, status: "disponivel" },
        { id: "90", name: "Jacarezinho", price: null, status: "indisponivel" },
        { id: "91", name: "Japeri", price: 150.00, status: "disponivel" },
        { id: "92", name: "Jardim América", price: 100.00, status: "disponivel" },
        { id: "93", name: "Jardim Botânico", price: 100.00, status: "disponivel" },
        { id: "94", name: "Jardim Carioca (Ilha)", price: 100.00, status: "disponivel" },
        { id: "95", name: "Jardim Guanabara (Ilha)", price: 100.00, status: "disponivel" },
        { id: "96", name: "Jardim Sulacap", price: 90.00, status: "disponivel" },
        { id: "97", name: "Joá", price: 100.00, status: "disponivel" },
        { id: "98", name: "Lagoa", price: 100.00, status: "disponivel" },
        { id: "99", name: "Laranjeiras", price: 100.00, status: "disponivel" },
        { id: "100", name: "Largo do Machado", price: 100.00, status: "disponivel" },
        { id: "101", name: "Leblon", price: 100.00, status: "disponivel" },
        { id: "102", name: "Leme", price: 100.00, status: "disponivel" },
        { id: "103", name: "Lins de Vasconcelos", price: 100.00, status: "disponivel" },
        { id: "104", name: "Madureira", price: 90.00, status: "disponivel" },
        { id: "105", name: "Magalhães Bastos", price: 90.00, status: "disponivel" },
        { id: "106", name: "Mallet", price: 100.00, status: "disponivel" },
        { id: "107", name: "Mangueira", price: 100.00, status: "disponivel" },
        { id: "108", name: "Mangueira (parte de cima do morro)", price: 150.00, status: "disponivel" },
        { id: "109", name: "Manguinhos", price: 120.00, status: "disponivel" },
        { id: "110", name: "Maracanã", price: 90.00, status: "disponivel" },
        { id: "111", name: "Marechal Hermes", price: 90.00, status: "disponivel" },
        { id: "112", name: "Maria da Graça", price: 90.00, status: "disponivel" },
        { id: "113", name: "Méier", price: 90.00, status: "disponivel" },
        { id: "114", name: "Mesquita", price: 90.00, status: "disponivel" },
        { id: "115", name: "Muriqui", price: 250.00, status: "disponivel" },
        { id: "116", name: "Muzema", price: 120.00, status: "disponivel" },
        { id: "117", name: "Nilópolis", price: 90.00, status: "disponivel" },
        { id: "118", name: "Niterói (Centro)", price: 100.00, status: "disponivel" },
        { id: "119", name: "Niterói - Itaipu", price: 120.00, status: "disponivel" },
        { id: "120", name: "Nova Campina", price: 130.00, status: "disponivel" },
        { id: "121", name: "Olaria", price: 90.00, status: "disponivel" },
        { id: "122", name: "Oswaldo Cruz", price: 90.00, status: "disponivel" },
        { id: "123", name: "Padre Miguel", price: 90.00, status: "disponivel" },
        { id: "124", name: "Palhada (N. Iguaçu)", price: 100.00, status: "disponivel" },
        { id: "125", name: "Paracambi", price: 150.00, status: "disponivel" },
        { id: "126", name: "Parada de Lucas", price: 90.00, status: "disponivel" },
        { id: "127", name: "Parque Columbia", price: 90.00, status: "disponivel" },
        { id: "128", name: "Pavuna", price: 90.00, status: "disponivel" },
        { id: "129", name: "Paciência", price: 100.00, status: "disponivel" },
        { id: "130", name: "Pechincha", price: 90.00, status: "disponivel" },
        { id: "131", name: "Penha", price: 90.00, status: "disponivel" },
        { id: "132", name: "Penha Circular", price: 90.00, status: "disponivel" },
        { id: "133", name: "Piabetá", price: 150.00, status: "disponivel" },
        { id: "134", name: "Piedade", price: 90.00, status: "disponivel" },
        { id: "135", name: "Pilares", price: 90.00, status: "disponivel" },
        { id: "136", name: "Posse (N. Iguaçu)", price: 100.00, status: "disponivel" },
        { id: "137", name: "Pitangueiras (Ilha)", price: 100.00, status: "disponivel" },
        { id: "138", name: "Portuguesa (Ilha)", price: 100.00, status: "disponivel" },
        { id: "139", name: "Praça Seca", price: 90.00, status: "disponivel" },
        { id: "140", name: "Queimados", price: 120.00, status: "disponivel" },
        { id: "141", name: "Quintino", price: 90.00, status: "disponivel" },
        { id: "142", name: "Ramos", price: 90.00, status: "disponivel" },
        { id: "143", name: "Realengo", price: 90.00, status: "disponivel" },
        { id: "144", name: "Recreio dos Bandeirantes", price: 130.00, status: "disponivel" },
        { id: "145", name: "Riachuelo", price: 90.00, status: "disponivel" },
        { id: "146", name: "Rio Comprido", price: 100.00, status: "disponivel" },
        { id: "147", name: "Rio das Pedras", price: 110.00, status: "disponivel" },
        { id: "148", name: "Rocha (São Gonçalo)", price: 180.00, status: "disponivel" },
        { id: "149", name: "Rocha (RJ)", price: 90.00, status: "disponivel" },
        { id: "150", name: "Rocha Miranda", price: 90.00, status: "disponivel" },
        { id: "151", name: "Rocinha", price: null, status: "indisponivel" },
        { id: "152", name: "Salgueiro (São Gonçalo)", price: 180.00, status: "disponivel" },
        { id: "153", name: "Sampaio", price: 90.00, status: "disponivel" },
        { id: "154", name: "Santa Cruz", price: 130.00, status: "disponivel" },
        { id: "155", name: "Santa Cruz da Serra", price: 150.00, status: "disponivel" },
        { id: "156", name: "Santa Eugênia", price: 90.00, status: "disponivel" },
        { id: "157", name: "Santa Teresa", price: 100.00, status: "disponivel" },
        { id: "158", name: "Santíssimo", price: 90.00, status: "disponivel" },
        { id: "159", name: "São Conrado", price: null, status: "indisponivel" },
        { id: "160", name: "São Cristóvão", price: 90.00, status: "disponivel" },
        { id: "161", name: "São Francisco Xavier", price: 90.00, status: "disponivel" },
        { id: "162", name: "São João de Meriti", price: 90.00, status: "disponivel" },
        { id: "163", name: "Saracuruna", price: 120.00, status: "disponivel" },
        { id: "164", name: "Senador Camará", price: 90.00, status: "disponivel" },
        { id: "165", name: "Senador Vasconcelos", price: 90.00, status: "disponivel" },
        { id: "166", name: "Sepetiba", price: 130.00, status: "disponivel" },
        { id: "167", name: "Tanque", price: 90.00, status: "disponivel" },
        { id: "168", name: "Taquara", price: 90.00, status: "disponivel" },
        { id: "169", name: "Tijuca", price: 100.00, status: "disponivel" },
        { id: "170", name: "Tinguá (Nova Iguaçu)", price: 120.00, status: "disponivel" },
        { id: "171", name: "Tijuquinha", price: 90.00, status: "disponivel" },
        { id: "172", name: "Todos os Santos", price: 90.00, status: "disponivel" },
        { id: "173", name: "Tomás Coelho", price: 90.00, status: "disponivel" },
        { id: "174", name: "Triagem", price: 90.00, status: "disponivel" },
        { id: "175", name: "Tribobó (São Gonçalo)", price: 180.00, status: "disponivel" },
        { id: "176", name: "Turiaçu", price: 90.00, status: "disponivel" },
        { id: "177", name: "Urca", price: 90.00, status: "disponivel" },
        { id: "178", name: "Urucrânia", price: 90.00, status: "disponivel" },
        { id: "179", name: "Usina", price: 90.00, status: "disponivel" },
        { id: "180", name: "Vargem Grande", price: 120.00, status: "disponivel" },
        { id: "181", name: "Vargem Pequena", price: 120.00, status: "disponivel" },
        { id: "182", name: "Vaz Lobo", price: 90.00, status: "disponivel" },
        { id: "183", name: "Vicente de Carvalho", price: 90.00, status: "disponivel" },
        { id: "184", name: "Vidigal", price: 130.00, status: "disponivel" },
        { id: "185", name: "Vigário Geral", price: 90.00, status: "disponivel" },
        { id: "186", name: "Vila da Penha", price: 100.00, status: "disponivel" },
        { id: "187", name: "Vila do João", price: 100.00, status: "disponivel" },
        { id: "188", name: "Vila Isabel", price: 100.00, status: "disponivel" },
        { id: "189", name: "Vila Kennedy", price: 90.00, status: "disponivel" },
        { id: "190", name: "Vila Militar", price: 90.00, status: "disponivel" },
        { id: "191", name: "Vila Valqueire", price: 90.00, status: "disponivel" },
        { id: "192", name: "Nova Iguaçu (Próximo ao Centro)", price: 90.00, status: "disponivel" },
        { id: "193", name: "Vista Alegre", price: 80.00, status: "disponivel" },
        { id: "194", name: "Xerém", price: 200.00, status: "disponivel" },
        { id: "195", name: "Zumbi", price: 150.00, status: "disponivel" },
        { id: "196", name: "Macaé", price: 750.00, status: "disponivel" },
        { id: "197", name: "Rio das Ostras", price: 700.00, status: "disponivel" },
        { id: "198", name: "Búzios", price: 700.00, status: "disponivel" },
        { id: "199", name: "Cabo Frio", price: 600.00, status: "disponivel" },
        { id: "200", name: "Arraial do Cabo", price: 600.00, status: "disponivel" },
        { id: "201", name: "Unamar", price: 600.00, status: "disponivel" },
        { id: "202", name: "São Pedro da Aldeia", price: 580.00, status: "disponivel" },
        { id: "203", name: "Iguaba Grande", price: 580.00, status: "disponivel" },
        { id: "204", name: "Araruama", price: 500.00, status: "disponivel" },
        { id: "205", name: "Saquarema", price: 350.00, status: "disponivel" },
        { id: "206", name: "Sampaio Correia", price: 300.00, status: "disponivel" },
        { id: "207", name: "Maricá", price: 250.00, status: "disponivel" },
        { id: "208", name: "Rio Bonito", price: 250.00, status: "disponivel" },
        { id: "209", name: "Tanguá", price: 250.00, status: "disponivel" },
        { id: "210", name: "Itaboraí", price: 230.00, status: "disponivel" },
        { id: "211", name: "São Gonçalo", price: 180.00, status: "disponivel" },
        { id: "212", name: "Barra Mansa", price: 700.00, status: "disponivel" },
        { id: "213", name: "Volta Redonda", price: 500.00, status: "disponivel" },
        { id: "214", name: "Barra do Piraí", price: 550.00, status: "disponivel" },
        { id: "215", name: "Piraí", price: 450.00, status: "disponivel" },
        { id: "216", name: "Engenheiro Paulo de Frontin", price: 500.00, status: "disponivel" },
        { id: "217", name: "Mendes", price: 450.00, status: "disponivel" },
        { id: "218", name: "Mangaratiba", price: 380.00, status: "disponivel" },
        { id: "219", name: "Praia Grande", price: 350.00, status: "disponivel" },
        { id: "220", name: "Coroa Grande", price: 300.00, status: "disponivel" },
        { id: "221", name: "Itaguaí (Centro)", price: 180.00, status: "disponivel" },
        { id: "222", name: "Itacuruçá", price: 280.00, status: "disponivel" },
        { id: "223", name: "Seropédica", price: 180.00, status: "disponivel" },
        { id: "224", name: "Nova Friburgo", price: 750.00, status: "disponivel" },
        { id: "225", name: "Cachoeiras de Macacu", price: 500.00, status: "disponivel" },
        { id: "226", name: "Teresópolis", price: 380.00, status: "disponivel" },
        { id: "227", name: "Petrópolis", price: 300.00, status: "disponivel" },
        { id: "228", name: "Guapimirim", price: 280.00, status: "disponivel" },
        { id: "229", name: "Magé", price: 180.00, status: "disponivel" }
    ];

    const search = document.getElementById("search");
    const results = document.getElementById("results");
    const count = document.getElementById("count");

    const form = document.getElementById("form");
    const district = document.getElementById("district");
    const price = document.getElementById("price");

    const toast = document.getElementById("toast");
    const saveBtn = document.getElementById("saveBtn");
    const toggleForm = document.getElementById("toggleForm");
    const cancelBtn = document.getElementById("cancelBtn");

    let editingId = null;
    let entries = load();

    // =====================================
    // CARREGAR CADASTROS
    // =====================================

    function load() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) {
                // Se não houver nada salvo, insere a lista padrão inicial
                localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEntries));
                return initialEntries;
            }
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : initialEntries;
        } catch (error) {
            console.error("Erro ao carregar cadastros:", error);
            return initialEntries;
        }
    }

    // =====================================
    // SALVAR CADASTROS
    // =====================================

    function persist() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(entries)
            );
        } catch (error) {
            console.error("Erro ao salvar cadastros:", error);
            showToast("Não foi possível salvar os dados.");
        }
    }

    // =====================================
    // NORMALIZAR PESQUISA
    // IGNORA ACENTOS E MAIÚSCULAS
    // =====================================

    function normalize(value) {
        return String(value || "")
            .toLocaleLowerCase("pt-BR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // =====================================
    // FORMATAR VALORES EM REAIS
    // =====================================

    function money(value) {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // =====================================
    // MENSAGENS DO SISTEMA
    // =====================================

    function showToast(message) {
        if (toast) {
            toast.textContent = message;
        }
    }

    // =====================================
    // MOSTRAR RESULTADOS DA PESQUISA
    // =====================================

    function render() {
        const term = normalize(search.value);

        results.innerHTML = "";

        // Não mostrar bairros enquanto a pesquisa
        // estiver vazia.

        if (!term) {
            count.textContent = "";
            return;
        }

        // Filtrar bairros correspondentes.

        const matches = entries
            .filter(item =>
                normalize(item.name).includes(term)
            )
            .sort((a, b) =>
                a.name.localeCompare(b.name, "pt-BR")
            );

        // Atualizar contador.

        count.textContent = matches.length === 1
            ? "1 bairro encontrado"
            : `${matches.length} bairros encontrados`;

        // Nenhum resultado encontrado.

        if (matches.length === 0) {
            const box = document.createElement("div");
            box.className = "empty";

            const symbol = document.createElement("div");
            symbol.className = "empty-symbol";
            symbol.textContent = "⌕";

            const title = document.createElement("strong");
            title.textContent = "Bairro não encontrado";

            const message = document.createElement("p");
            message.textContent =
                "Tente outro trecho do nome ou cadastre esse bairro na área abaixo.";

            box.append(symbol, title, message);
            results.appendChild(box);

            return;
        }

        // Mostrar bairros encontrados.

        matches.forEach(item => {
            const card = document.createElement("article");
            card.className = "result";

            const place = document.createElement("div");
            place.className = "place";

            const pin = document.createElement("div");
            pin.className = "pin";
            pin.textContent = "⌖";

            const info = document.createElement("div");

            const name = document.createElement("div");
            name.className = "place-name";
            name.textContent = item.name;

            const label = document.createElement("div");
            label.className = "place-label";
            label.textContent = "Valor do frete";

            info.append(name, label);
            place.append(pin, info);

            const side = document.createElement("div");
            side.className = "result-side";

            const amount = document.createElement("div");
            amount.className = "price";

            if (
                item.status === "indisponivel" ||
                item.price === null ||
                item.price === undefined
            ) {
                amount.textContent = "Não fazemos";
                amount.classList.add("unavailable");
            } else {
                amount.textContent = money(item.price);
            }

            // Ações de edição e exclusão.

            const actions = document.createElement("div");
            actions.className = "row-actions";

            const edit = document.createElement("button");
            edit.type = "button";
            edit.className = "mini";
            edit.textContent = "Editar";

            edit.addEventListener("click", () => {
                startEdit(item);
            });

            const del = document.createElement("button");
            del.type = "button";
            del.className = "mini delete";
            del.textContent = "Excluir";

            del.addEventListener("click", () => {
                removeItem(item.id);
            });

            actions.append(edit, del);
            side.append(amount, actions);

            card.append(place, side);
            results.appendChild(card);
        });
    }

    // =====================================
    // ABRIR FORMULÁRIO PARA EDIÇÃO
    // =====================================

    function startEdit(item) {
        editingId = item.id;

        district.value = item.name;
        price.value = item.price ?? "";

        form.classList.add("open");

        saveBtn.textContent = "Atualizar bairro";
        toggleForm.textContent = "Fechar cadastro";

        district.focus();

        showToast("Editando: " + item.name);
    }

    // =====================================
    // LIMPAR FORMULÁRIO
    // =====================================

    function resetForm() {
        editingId = null;

        form.reset();

        showToast("");

        saveBtn.textContent = "Salvar bairro";

        form.classList.remove("open");

        toggleForm.textContent = "＋ Adicionar bairro";
    }

    // =====================================
    // EXCLUIR BAIRRO
    // =====================================

    function removeItem(id) {
        const item = entries.find(entry => entry.id === id);

        if (!item) return;

        const confirmation = confirm(
            `Excluir o cadastro de "${item.name}"?`
        );

        if (!confirmation) return;

        entries = entries.filter(entry => entry.id !== id);

        persist();
        render();

        if (editingId === id) {
            resetForm();
        }

        showToast("Cadastro excluído.");
    }

    // =====================================
    // PESQUISA AUTOMÁTICA
    // =====================================

    search.addEventListener("input", render);

    // =====================================
    // ABRIR E FECHAR FORMULÁRIO
    // =====================================

    toggleForm.addEventListener("click", () => {
        const isOpen = form.classList.toggle("open");

        toggleForm.textContent = isOpen
            ? "Fechar cadastro"
            : "＋ Adicionar bairro";

        if (isOpen) {
            district.focus();
        } else {
            resetForm();
        }
    });

    // =====================================
    // CANCELAR CADASTRO
    // =====================================

    cancelBtn.addEventListener("click", resetForm);

    // =====================================
    // CADASTRAR OU ATUALIZAR BAIRRO
    // =====================================

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = district.value
            .trim()
            .replace(/\s+/g, " ");

        const value = Number(price.value);

        // Validar dados.

        if (
            !name ||
            !Number.isFinite(value) ||
            value < 0 ||
            price.value.trim() === ""
        ) {
            showToast(
                "Confira o nome do bairro e o valor do frete."
            );
            return;
        }

        // Verificar duplicidade.

        const duplicate = entries.find(item =>
            normalize(item.name) === normalize(name) &&
            item.id !== editingId
        );

        if (duplicate) {
            showToast(
                "Esse bairro já está cadastrado. Edite o cadastro existente."
            );
            return;
        }

        // Atualizar cadastro existente.

        if (editingId !== null) {
            entries = entries.map(item =>
                item.id === editingId
                    ? {
                        ...item,
                        name,
                        price: value,
                        status: "disponivel"
                    }
                    : item
            );

            showToast("Cadastro atualizado.");
        }

        // Criar novo cadastro.

        else {
            const newItem = {
                id: (
                    crypto.randomUUID
                        ? crypto.randomUUID()
                        : String(Date.now())
                ),
                name,
                price: value,
                status: "disponivel"
            };

            entries.push(newItem);

            showToast("Bairro cadastrado com sucesso.");
        }

        // Salvar e atualizar.

        persist();

        search.value = name;
        render();

        setTimeout(resetForm, 650);
    });

    // =====================================
    // INICIALIZAR SISTEMA
    // =====================================

    render();

})();