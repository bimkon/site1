import * as $ from 'jquery'
import Post from './Post'
import './styles/styles.css'
import Waters from './assets/Water.png'
import './styles/scss.scss'

const post = new Post('Wepback post title', Waters)
$('pre').html(post.toString())

