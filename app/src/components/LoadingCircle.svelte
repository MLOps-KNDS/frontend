<div class="rainbow-spinner mx-auto" />

<style>
	.rainbow-spinner {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 10px solid transparent;
		border-top-color: #fb7185;
		border-right-color: lightgreen;
		border-bottom-color: lightblue;
		border-left-color: yellow;
		border-left-width: 15px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
