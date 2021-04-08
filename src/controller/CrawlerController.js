const cheerio = require('cheerio');

class CrawlerController {

  execute(request, response) {
    let body = ''
    body = `  
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />	<title>
		Gatry - Promoções	</title>
	<link href="/favicon.ico?1611966504" type="image/x-icon" rel="icon" /><link href="/favicon.ico?1611966504" type="image/x-icon" rel="shortcut icon" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/css/reset-html5.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/js/fancyapps/source/jquery.fancybox.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/js/raty/jquery.raty.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/js/tags_input/jquery.tagsinput.min.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/js/sweetalert/dist/sweetalert.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/css/ladda.min.css?v=202101051101" />
	<link rel="stylesheet" type="text/css" href="https://static.gatry.com/css/default.css?v=202101051101" />
	<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

			<script type="text/javascript">
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-62348636-1', 'auto');
			ga('send', 'pageview');
		</script>
	
	<script type="text/javascript">
	var WEB_ROOT = "https://gatry.com/";
	var DATA_ACESSO = "2021-04-08 15:05:27";
	var FACEBOOK_ID = "";
	var IS_LOGGED = false;
	var PUSHER_APP_KEY = "a350d71befcecdb171ea";
	var PUSHER_APP_CHANNEL = "gatry-site";
	var PUSHER_IDENTIFY = "ZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2U=";
	</script>

	<script src="https://js.pusher.com/7.0/pusher.min.js"></script>

	
	<script type="text/javascript" src="https://static.gatry.com//js/pusher.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/jquery.v2.2.3.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/fancyapps/source/jquery.fancybox.pack.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/jquery_lazyload/jquery.lazyload.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/jquery-validation/dist/jquery.validate.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/jquery.mask.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/raty/jquery.raty.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/tags_input/jquery.tagsinput.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/autosize.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/sweetalert/dist/sweetalert.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/spin.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/ladda.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/ladda.jquery.min.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/basico.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/facebook.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/promocao.js?v=202101051101" fullBase="1"></script>
	<script type="text/javascript" src="https://static.gatry.com/js/avaliacao.js?v=202101051101" fullBase="1"></script>
<script type="text/javascript" src="/js/promocoes.js?1611966505"></script>	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<meta name="description" content="Compartilhe promoções, fotos e opiniões reais, sobre os mais diversos produtos vendidos na internet."/>

	<meta property="og:locale" content="pt_BR"/>
	<meta property="og:title" content="Gatry" />
	<meta property="og:image" content="https://gatry.com/img/logo_200x200.png"/>
	<meta property="og:url" content="https://gatry.com/" />
	<meta property="og:site_name" content="Gatry" />
	<meta property="og:description" content="Compartilhe promoções, fotos e opiniões reais, sobre os mais diversos produtos vendidos na internet." />
	<meta property="og:type" content="website" />

	<meta name="lomadee-verification" content="22774511" />

</head>
<body class="">
	<header>
		<div class="limit">
			<div class="header-brand">
				<h1><a href="/">Gatry</a></h1>

				<div class="compartilhar"><a href="#" class="btn-compartilhar">Compartilhar</a><ul><li><a href="/promocao/enviar" id="CompartilharPromocao" data-box="#box-compartilhar-promocao">Promoção</a></li><li><a href="/avaliacoes/enviar" id="CompartilharAvaliacao" data-box="#box-compartilhar-avaliacao">Avaliação</a></li></ul></div><a href="#box-entrar" id="link-entrar">Entrar</a>			</div>
		</div>
	</header>

	<section id="box-entrar">
	<form action="/user/login" id="form-entrar" method="post" accept-charset="utf-8"><div style="display:none;"><input type="hidden" name="_method" value="POST"/></div><h2>Acesse a sua conta</h2><div class="input email"><label for="form-entrar-email">E-mail</label><input name="data[email]" id="form-entrar-email" type="email"/></div><div class="input password last"><label for="form-entrar-senha">Senha</label><input name="data[senha]" id="form-entrar-senha" type="password"/></div><button id="btn-login-normal" class="ladda-button" data-size="s" data-style="expand-right" type="submit">Entrar</button><p class="esqueceu-senha"><a href="/user/recuperar_senha">Esqueceu senha?</a></p><h4><span>Acesse com a sua rede social</span></h4><a href="/" class="btn-facebook" id="btn-login-facebook">Facebook</a><p class="cadastrar"><a href="/user/cadastro">Não tem conta? Cadastre-se?</a></p></form></section>
			<div style="display: none;" id="box-compartilhar-promocao">
			<div class="box-generico cadastro">

	<h2>Enviar Promoção</h2>

	<form action="/promocao/enviar" id="form-promocao" method="post" accept-charset="utf-8"><div style="display:none;"><input type="hidden" name="_method" value="POST"/></div><div class="input text"><label for="form-promocao-produto">Produto</label><input name="data[nome]" id="form-promocao-produto" type="text"/></div><div class="input text"><label for="form-promocao-link">Link do produto</label><input name="data[link]" id="form-promocao-link" placeholder="http://" type="text"/></div><div class="input last"><label for="form-promocao-preco">Preço</label><input name="data[preco]" id="form-promocao-preco" type="text"/></div><div class="input textarea"><label for="form-promocao-comentario">Comentário (opcional)</label><textarea name="data[descricao]" id="form-promocao-comentario" cols="30" rows="6"></textarea></div><div class="submit"><input  class="btn" type="submit" value="Enviar"/></div></form>
</div>		</div>
	
			<div style="display: none;" id="box-compartilhar-avaliacao">
			<div class="box-generico cadastro">

	<h2>Enviar Avaliação</h2>

	<form action="/avaliacoes/enviar" id="form-foto-avaliacao" enctype="multipart/form-data" method="post" accept-charset="utf-8"><div style="display:none;"><input type="hidden" name="_method" value="POST"/></div><div class="input text"><label for="form-foto-avaliacao-tags">Tags</label><input name="data[tags]" id="form-foto-avaliacao-tags" type="text"/></div><p class="obs">Não é preciso adicionar hashtag (#), utilize espaço, ponto e virgula (;) ou virgula (,) para separar as tags.</p><div class="input file"><label for="form-foto-avaliacao-foto-principal">Foto Principal</label><input type="file" name="data[foto_1]"  id="form-foto-avaliacao-foto-principal"/></div><div class="input file"><label for="form-foto-avaliacao-foto-2">Foto (Opcional)</label><input type="file" name="data[foto_2]"  id="form-foto-avaliacao-foto-2"/></div><div class="input file"><label for="form-foto-avaliacao-foto-3">Foto (Opcional)</label><input type="file" name="data[foto_3]"  id="form-foto-avaliacao-foto-3"/></div><div class="clear"></div><div class="input last"><label for="form-foto-avaliacao-avaliacao">Avaliação</label><div id="avaliacao"></div></div><div class="input textarea"><label for="form-foto-avaliacao-comentario">Comentário (opcional)</label><textarea name="data[descricao]" id="form-foto-avaliacao-comentario" cols="30" rows="6"></textarea></div><div class="submit"><input  class="btn" type="submit" value="Enviar"/></div></form>
</div>		</div>
	
	<nav>
		<div class="limit">
						<ul class="promocao-menu">
				<li class="menu-comentarios"><a href="/comentarios" class="">Comentários <span id="bullet-comentarios">0</span></a></li><li class="menu-promocoes"><a href="/" class="active">Promoções <span id="bullet-promocoes">0</span></a></li><li class="menu-avaliacoes"><a href="/avaliacoes" class="">Avaliações <span id="bullet-avaliacoes">0</span></a></li><li class="menu-livre"><a href="/livre" class="">Livre <span id="bullet-livres">0</span></a></li>			</ul>
		</div>
	</nav>

	<main class="content">
		<div class="limit">
			
			<div class="alert alert-success" >
	<button type="button" class="close" data-dismiss="alert" >×</button>
	<p style="margin: 7px"><strong>Seja bem-vindo à plataforma colaborativa da Gatry! (Faça login para visualizar todas promoções)</strong></p><p style="margin: 7px"> Compartilhe promoções, fotos e opiniões reais sobre os mais diversos produtos vendidos na internet.</p></div>
<section class="promocoes layout-teste ">

	<h2 style="display: none;">Promoções</h2>

	<form action="/promocoes" class="form-search" id="indexForm" method="get" accept-charset="utf-8"><input name="q" placeholder="Pesquisar em Promoções" type="text" id="q"/><input  type="submit" value="enviar"/></form><a href="/user/alertas" class="criar-alerta-home">Criar Alerta</a>
	
	<div class="lista-promocoes">
			<article id="promocao-148251" class="promocao first" itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://www.lojaotomask.com.br/Mascara-de-Protecao-Reutilizavel-com-4-Filtros-Cirurgico-Descartaveis/p" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/9a417fa25795adab7ebfc582b9230bb5.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/queijoqueijo"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/644df1297c90a3a60010418522b8c74f.jpg" itemprop="image" title="Queijo" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:59">
				6 minutos<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://www.lojaotomask.com.br/Mascara-de-Protecao-Reutilizavel-com-4-Filtros-Cirurgico-Descartaveis/p" target="_blank">Oto Mask - 50% De Desconto Nas Máscaras Brancas </a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">14,99</span></p><p class="preco comentario clear">"Até dia 15 de Abril."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/queijoqueijo"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/644df1297c90a3a60010418522b8c74f.jpg" itemprop="image" title="Queijo" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148251" class="link-comentarios show-lightbox-comments">2 <span>Comentários</span></a><a href="https://www.lojaotomask.com.br/Mascara-de-Protecao-Reutilizavel-com-4-Filtros-Cirurgico-Descartaveis/p" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Lojaotomask</a><a href="/promocao/detalhes/148251/oto-mask-50-de-desconto-nas-mascaras-brancas" class="mais hidden-xs" data-promocao="148251"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:59">
					6 minutos<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148251">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148250" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://amzn.to/3wNnmOb" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/b8a8f985c6884504f831269e5c7bc603.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/queijoqueijo"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/644df1297c90a3a60010418522b8c74f.jpg" itemprop="image" title="Queijo" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:57">
				7 minutos<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://amzn.to/3wNnmOb" target="_blank">OTO Refil Filtros - Cirúrgico - 20 unidades, Elka</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">11,76</span></p><p class="preco comentario clear">"Filtros com tripla camada e e..."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/queijoqueijo"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/644df1297c90a3a60010418522b8c74f.jpg" itemprop="image" title="Queijo" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148250" class="link-comentarios show-lightbox-comments">2 <span>Comentários</span></a><a href="https://amzn.to/3wNnmOb" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Amazon</a><a href="/promocao/detalhes/148250/oto-refil-filtros-cirurgico-20-unidades-elka" class="mais hidden-xs" data-promocao="148250"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:57">
					7 minutos<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148250">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148248" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://tidd.ly/3uzZmMp" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/5f493aeb78ac4a576ef6112afb5a58e9.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/thepowerguido"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/ae6b0fc9ae191926e54426a81012199d.png" itemprop="image" title="ThePowerGuido™" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:48">
				16 minutos<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://tidd.ly/3uzZmMp" target="_blank">Notebook Samsung Galaxy Book S NP767XCM-K01BR 13.3'' Intel Core i5 Full HD Led 256GB SSD </a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">5.759,00</span></p><p class="preco comentario clear">"Use o cupom RELAMPAGO200."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/thepowerguido"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/ae6b0fc9ae191926e54426a81012199d.png" itemprop="image" title="ThePowerGuido™" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148248" class="link-comentarios show-lightbox-comments">4 <span>Comentários</span></a><a href="https://tidd.ly/3uzZmMp" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Compracerta</a><a href="/promocao/detalhes/148248/notebook-samsung-galaxy-book-s-np767xcm-k01br-13-3-intel-core-i5-full-hd-led-256gb-ssd" class="mais hidden-xs" data-promocao="148248"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:48">
					16 minutos<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148248">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148249" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://tidd.ly/3t3VZgf" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem_url/bbd8fb82d140092eb8b30be10f58233d.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/thepowerguido"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/ae6b0fc9ae191926e54426a81012199d.png" itemprop="image" title="ThePowerGuido™" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:44">
				20 minutos<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://tidd.ly/3t3VZgf" target="_blank">Cooktop 5 Bocas Brastemp Com Quadrichama E Acendimento Automático - BDD85AE - Bivolt</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">691,70</span></p><p class="preco comentario clear">"À vista. Ganhe 100 reais da B..."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/thepowerguido"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/ae6b0fc9ae191926e54426a81012199d.png" itemprop="image" title="ThePowerGuido™" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148249" class="link-comentarios show-lightbox-comments">3 <span>Comentários</span></a><a href="https://tidd.ly/3t3VZgf" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Compracerta</a><a href="/promocao/detalhes/148249/cooktop-5-bocas-brastemp-com-quadrichama-e-acendimento-automatico-bdd85ae-bivolt" class="mais hidden-xs" data-promocao="148249"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:44">
					20 minutos<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148249">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148247" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://amzn.to/3d1iTzf" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/a3f67dc926bf7cd2595e79a022db0bb8.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/2otOZLAJ"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/fc465533d6d9a0e7ca13012783f1240c.jpg" itemprop="image" title="Inofim" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:12">
				52 minutos<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://amzn.to/3d1iTzf" target="_blank">Kit Com 3 Máscaras Microfibra Trifil, Único</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">26,90</span></p><p class="preco comentario clear">"Frete Prime"</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/2otOZLAJ"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/fc465533d6d9a0e7ca13012783f1240c.jpg" itemprop="image" title="Inofim" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148247" class="link-comentarios show-lightbox-comments">8 <span>Comentários</span></a><a href="https://amzn.to/3d1iTzf" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Amazon</a><a href="/promocao/detalhes/148247/kit-com-3-mascaras-microfibra-trifil-unico" class="mais hidden-xs" data-promocao="148247"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:12">
					52 minutos<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148247">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148245" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://tidd.ly/39QPyp9" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem_url/d2c6032607727e42e2bceaf209aac5a0.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/ePJTPEs9"><img src="https://www.gravatar.com/avatar/deccdfdf2852f710c1e91abafde165c3?d=https%3A%2F%2Fgatry.com%2Fimg%2Fuser_foto.png" itemprop="image" title="ramon666" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:02">
				1 hora<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://tidd.ly/39QPyp9" target="_blank">Calça Legging Oxer Slim C Pol New - Feminina</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">29,99</span></p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/ePJTPEs9"><img src="https://www.gravatar.com/avatar/deccdfdf2852f710c1e91abafde165c3?d=https%3A%2F%2Fgatry.com%2Fimg%2Fuser_foto.png" itemprop="image" title="ramon666" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148245" class="link-comentarios show-lightbox-comments">0 <span>Comentários</span></a><a href="https://tidd.ly/39QPyp9" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Centauro</a><a href="/promocao/detalhes/148245/calca-legging-oxer-slim-c-pol-new-feminina" class="mais hidden-xs" data-promocao="148245"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:02">
					1 hora<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148245">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148246" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://amzn.to/3d1VTAs" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/49702e75f600010c3ea59e6c0170da2c.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/compartilhador"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/8f97a02eabf04d4dc75138467f4ab9cc.jpg" itemprop="image" title="Rafaells" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:00">
				1 hora<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://amzn.to/3d1VTAs" target="_blank">Mochila Puma S Backpack, Verde Musgo</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">107,95</span></p><p class="preco comentario clear">"Preço aparece só na finalização"</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/compartilhador"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/8f97a02eabf04d4dc75138467f4ab9cc.jpg" itemprop="image" title="Rafaells" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148246" class="link-comentarios show-lightbox-comments">1 <span>Comentários</span></a><a href="https://amzn.to/3d1VTAs" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Amazon</a><a href="/promocao/detalhes/148246/mochila-puma-s-backpack-verde-musgo" class="mais hidden-xs" data-promocao="148246"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 14:00">
					1 hora<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148246">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-148244" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://tidd.ly/39TkuoZ" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/bb182390211add6c4df28a2f3f72e2fc.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/gavinthomas"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/fa7567d371cea8bbec942af6421d9c65.png" itemprop="image" title="gavin" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 13:49">
				1 hora<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://tidd.ly/39TkuoZ" target="_blank">Kit 3 Meias Cano Alto Mash Multicores</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">12,90</span></p><p class="preco comentario clear">"Promoções disponíveis
Cupom ..."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/gavinthomas"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/fa7567d371cea8bbec942af6421d9c65.png" itemprop="image" title="gavin" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="148244" class="link-comentarios show-lightbox-comments">1 <span>Comentários</span></a><a href="https://tidd.ly/39TkuoZ" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Lojasrenner</a><a href="/promocao/detalhes/148244/kit-3-meias-cano-alto-mash-multicores" class="mais hidden-xs" data-promocao="148244"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 13:49">
					1 hora<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-148244">
			<ul></ul>
		</div>
			</article>
		<article id="promocao-146903" class="promocao " itemscope itemtype="http://schema.org/Product">

		<div class="imagem">
			<a href="https://www.sodimac.com.br/sodimac-br/product/764215" target="_blank"><img src="https://cdn.gatry.com/gatry-static/promocao/imagem/faff3ebdb0344562e6ef3fc61282f7f3.jpg" class="" alt="" /></a>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/uliskyblue"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/70b277a06e93955befdfa5d4a83eb4a3.jpeg" itemprop="image" title="ULISSES M" alt="" /></a>			</p>

			<span class="data_postado" itemprop="startDate" title="08/04/2021 às 13:06">
				1 hora<span> atrás</span>			</span>
		</div>

		<div class="informacoes">
			<h3 itemprop="name">
				<a href="https://www.sodimac.com.br/sodimac-br/product/764215" target="_blank">Gazebo Pergolado Com Ventilação 295x295cm Taupe</a>			</h3>
			<p  class="descricao" itemprop="description"></p>

			<p class="preco margin-comentario"><span itemprop="priceCurrency" content="BRL">R$</span> <span itemprop="price">449,00</span></p><p class="preco comentario clear">"Infelizmente, eu paguei R$ 59..."</p>
			<p class="usuario" itemscope itemtype="http://schema.org/Person">
				<a href="/user/detalhe/uliskyblue"><img src="https://cdn.gatry.com/gatry-static/user/foto/thumb/70b277a06e93955befdfa5d4a83eb4a3.jpeg" itemprop="image" title="ULISSES M" alt="" /></a>			</p>

			<p class="opcoes">
				<a href="#comentarios" itemprop="commentCount" data-id="146903" class="link-comentarios show-lightbox-comments">23 <span>Comentários</span></a><a href="https://www.sodimac.com.br/sodimac-br/product/764215" itemprop="url" class="link_loja" target="_blank"><span class="hidden-xs">Ir para </span>Sodimac</a><a href="/promocao/detalhes/146903/gazebo-pergolado-com-ventilacao-295x295cm-taupe" class="mais hidden-xs" data-promocao="146903"><img src="/img/three-dots.png?1611966504" alt="" /></a>				<span class="data_postado" itemprop="startDate" title="08/04/2021 às 13:06">
					1 hora<span> atrás</span>				</span>
			</p>

		</div>
				<div class="comentarios" id="comentarios-promocao-146903">
			<ul></ul>
		</div>
			</article>
		</div>

	<a href="#carregar-mais" class="carregar-mais carregar-mais-promocoes" data-promocao="1">Carregar mais...</a></section>		</div>
	</main>


	<div class="scroll-to-top">
		<img src="/img/up.png?1611966504" alt="" />	</div>


	<footer>
		<div class="limit">
			<p>
				<strong><a href="/sobre">GATRY?</a></strong>
				<strong><a href="/termos">Termos</a></strong>
				<strong><a href="mailto:guilherme@gatry.com">Contato</a></strong>
				<strong><a href="https://www.instagram.com/gatry_promocoes/" target="_blank">Instagram</a></strong>
			</p>
			<p>Gatry © 2021</p>
		</div>
	</footer>
</body>
</html>

    `
    const $ = cheerio.load(body);

		function makeCrawling() {

			function getProductsName() {
				const products = $('.lista-promocoes .promocao div.informacoes h3');
				const productsNames = [];

				products.map((index ,element) => {
					const newName = $(element);
					productsNames.push(newName.text().slice(5).slice(0,-3));
				});
				
				return productsNames;
			}

			function getProductsPrice() {
				const products = $('.lista-promocoes .promocao div.informacoes p.preco.margin-comentario span[itemprop="price"]');
				const productsPrices = [];

				products.map((index ,element) => {
					const newPrice = $(element);
					productsPrices.push('R$ '+newPrice.text());
				});
				
				return productsPrices;
			}
			
			function getProductsTime() {
				const products = $('.lista-promocoes .promocao div.imagem span.data_postado');
				const productsTime = [];

				products.map((index ,element) => {
					const newTime = $(element);
					
					productsTime.push(newTime.attr().title);
				});
				
				return productsTime;
			}

			function getProductsImg() {
				const products = $('.lista-promocoes .promocao div.imagem a[target="_blank"] img');
				const productsImg = [];

				products.map((index ,element) => {
					const newImg = $(element);

					productsImg.push(newImg.attr().src);
				});
				
				return productsImg;
			}

			function getProductsFinalUrl() {
				const products = $('.lista-promocoes .promocao div.imagem a[target="_blank"]');
				const productsImg = [];

				products.map((index ,element) => {
					const newImg = $(element);

					productsImg.push(newImg.attr().href);
				});
				
				return productsImg;
			}

			function getProductsLojaName() {
				const products = $('a.link_loja');
				const productsLojaName = [];

				products.map((index ,element) => {
					const newLojaName = $(element);

					productsLojaName.push(newLojaName.text().slice(8));
				});
				
				return productsLojaName;
			}

			function assemblyTheResponse() {
					
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

    const result = makeCrawling()

    return response.status(200).json(result)
  };
};

module.exports = CrawlerController