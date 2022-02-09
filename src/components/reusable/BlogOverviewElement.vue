<template>
    <div class="link-image">
        <img class="m-5 w-90 h-1" src="https://cataas.com/cat"/>
    </div>
    <div class="link-text">
        <h3 v-html="post.title.rendered" class="link-headline"></h3>
        <span class="link-text" v-html="post.excerpt.rendered"></span>
        <simple-button>
            <router-link :to="{ name: 'BlogDetails', params: { postName: post.slug }}">Read more!</router-link>
        </simple-button>
    </div>
</template>