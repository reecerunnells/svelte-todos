<script>
	export let name;

    let todos = [
		{ done: false, text: 'item 1' },
		{ done: false, text: 'item 2' },
		{ done: false, text: 'item 3' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	function sortTodos() {
		todos = todos.sort((a,b)=>{
			return (a.done === b.done) ? 0 : b.done? -1 : 1;
		})
	}

	$: remaining = todos.filter(t => !t.done).length;
</script>

<main>
	<h1>{name}!</h1>

	{#each todos as todo}
	<div>
		<input
			type=checkbox
			bind:checked={todo.done}
			on:change={sortTodos}
		>

		<input
			placeholder="What needs to be done?"
			bind:value={todo.text}
			disabled={todo.done}
		>
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
	Add new
</button>

<button on:click={clear}>
	Clear completed
</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>