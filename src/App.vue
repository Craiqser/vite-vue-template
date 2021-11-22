<template>
<header />
<main>
	<section class="container">
		<span>Hi</span>
	</section>
</main>
<footer />
</template>

<style lang='scss'>
@import '~/assets/base.scss';

body {
	display: grid;
	grid-template-rows: auto 1fr auto;
}

.container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
