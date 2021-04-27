// MARK: Libraries
import LocalizedStrings from "localized-strings";

// MARK: Implementation
const strings = new LocalizedStrings({
	ptBR: {
		appName: "Ton Store",
		cartScreenTitle: "Carrinho",
		addedProductsPlural: "{0} Produtos Adicionados",
		addedProductsSingle: "1 Produto Adicionado",
		count: "Contar",
		error: {
			default: "Houve um erro, tente novamente",
		},
		noItemsInCartTitle: "Carrinho Vazio",
		noItemsInCartDescription: "Adicione um item",
		itemAddInCart: "Item adicionado ao carrinho",
		confirmDeleteItemInCart: "Deseja remover este item do carrinho?",
		yes: "Sim",
		no: "Não",
		problem: "Oops! Houve um problema por aqui"
	},
});

export default strings;
