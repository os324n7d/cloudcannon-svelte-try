<main>
	<h1>CloudCannon Test Blog</h1>
	<ul>
		<li data-sveltekit-preload-data="hover"><a href="/post-one">First Post</a></li>
		<li data-sveltekit-preload-data="hover"><a href="/post-two">Second Post</a></li>
		<li data-sveltekit-preload-data="hover"><a href="/post-three">Third Post</a></li>
	</ul>

	<h2>Contact us</h2>
	<form method="post" action="/?message-submitted=true">
		<label for="name">Name</label>
		<input id="name" type="text" placeholder="Name" />
		<label for="email">Email</label>
		<input id="email" type="text" placeholder="Email" />
		<input type="hidden" name="inbox_key" value="contact-form" />
		<textarea id="message" placeholder="Type your message here" />
		<button type="submit">Send</button>
	</form>
</main>
