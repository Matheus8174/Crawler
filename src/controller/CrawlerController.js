const cheerio = require('cheerio');
const requestLibrari = require('request')

class CrawlerController {

  execute(request, response) {
    
		const url = 'https://gatry.com'

		requestLibrari({url}, (error, res, body) => {
			if(error) {
				return response.status(500).json({
					error	
				})
			} else {
				
				const result = makeCrawling(body)
				
				return response.status(200).json(result)
			}
		})

		
		function makeCrawling(body) {
			
			const $ = cheerio.load(body);
			
			const selectors = {
				title: '.lista-promocoes .promocao div.informacoes h3',
				price: '.lista-promocoes .promocao div.informacoes p.preco.margin-comentario span[itemprop="price"]',
				time: '.lista-promocoes .promocao div.imagem span.data_postado',
				img: '.lista-promocoes .promocao div.imagem a[target="_blank"] img',
				finalUrl: '.lista-promocoes .promocao div.imagem a[target="_blank"]',
				loja: 'a.link_loja'
			}

			function getProductsName() {
				const products = $(selectors.title);
				const productsNames = [];

				products.map((index ,element) => {
					const newName = $(element);
					productsNames.push(newName.text().slice(5).slice(0,-3));
				});
				
				return productsNames;
			}

			function getProductsPrice() {
				const products = $(selectors.price);
				const productsPrices = [];

				products.map((index ,element) => {
					const newPrice = $(element);
					productsPrices.push('R$ '+newPrice.text());
				});
				
				return productsPrices;
			}
			
			function getProductsTime() {
				const products = $(selectors.time);
				const productsTime = [];

				products.map((index ,element) => {
					const newTime = $(element);
					
					productsTime.push(newTime.attr().title);
				});
				
				return productsTime;
			}

			function getProductsImg() {
				const products = $(selectors.img);
				const productsImg = [];

				products.map((index ,element) => {
					const newImg = $(element);

					productsImg.push(newImg.attr().src);
				});
				
				return productsImg;
			}

			function getProductsFinalUrl() {
				const products = $(selectors.finalUrl);
				const productsImg = [];

				products.map((index ,element) => {
					const newImg = $(element);

					productsImg.push(newImg.attr().href);
				});
				
				return productsImg;
			}

			function getProductsLojaName() {
				const products = $(selectors.loja);
				const productsLojaName = [];

				products.map((index ,element) => {
					const newLojaName = $(element);

					productsLojaName.push(newLojaName.text().slice(8));
				});
				
				return productsLojaName;
			}

			function assemblyTheResponse() {
				const response = []
				for (let index = 0; index < 9; index++) {
					const newObj = {
						title: getProductsName()[index],
						price: getProductsPrice()[index],
						time: getProductsTime()[index],
						img: getProductsImg()[index],
						origin: 'gatry',
						finalUrl: getProductsFinalUrl()[index],
						loja: getProductsLojaName()[index]
					}
					response.push(newObj)
				}
				return response
			}

			return assemblyTheResponse()
		}
  };
};

module.exports = CrawlerController