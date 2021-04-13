<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 13:43:02
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 16:27:18
-->
<template>
  <div class="wrapper">
    <ul class="content">
      <li>sss1</li>
      <li>sss2</li>
      <li>sss3</li>
      <li>sss4</li>
      <li>sss5</li>
      <li>sss6</li>
      <li>sss7</li>
      <li>sss8</li>
      <li>sss9</li>
      <li>sss10</li>
      <li>sss11</li>
      <li>sss12</li>
      <li>sss13</li>
      <li>sss14</li>
      <li>sss27</li>
      <li>sss28</li>
      <li>sss29</li>
      <li>sss30</li>
      <li>sss31</li>
      <li>sss32</li>
      <li>sss33</li>
      <li>sss34</li>
      <li>sss35</li>
      <li>sss36</li>
      <li>sss37</li>
      <li>sss38</li>
      <li>sss39</li>
      <li>sss40</li>
      <li>sss41</li>
      <li>sss42</li>
      <li>sss43</li>
      <li>sss44</li>
      <li>sss45</li>
      <li>sss46</li>
      <li>sss47</li>
      <li>sss48</li>
      <li>sss49</li>
      <li>sss50</li>
      <li>sss51</li>
      <li>sss52</li>
      <li>sss53</li>
      <li>sss54</li>
      <li>sss55</li>
      <li>sss56</li>
      <li>sss57</li>
      <li>sss58</li>
      <li>sss59</li>
      <li>sss60</li>
      <li>sss61</li>
      <li>sss62</li>
      <li>sss63</li>
      <li>sss64</li>
      <li>sss65</li>
      <li>sss66</li>
      <li>sss67</li>
      <li>sss68</li>
      <li>sss69</li>
      <li>sss70</li>
      <li>sss71</li>
      <li>sss72</li>
      <li>sss73</li>
      <li>sss74</li>
      <li>sss75</li>
      <li>sss76</li>
      <li>sss77</li>
      <li>sss78</li>
      <li>sss79</li>
      <li>sss80</li>
      <li>sss81</li>
      <li>sss82</li>
      <li>sss83</li>
      <li>sss84</li>
      <li>sss85</li>
      <li>sss86</li>
      <li>sss87</li>
      <li>sss88</li>
      <li>sss89</li>
      <li>sss90</li>
      <li>sss91</li>
      <li>sss92</li>
      <li>sss93</li>
      <li>sss94</li>
      <li>sss95</li>
      <li>sss96</li>
      <li>sss200</li>
      <li>sss201</li>
      <li>sss202</li>
      <li>sss203</li>
      <li>sss204</li>
      <li>sss205</li>
      <li>sss206</li>
      <li>sss207</li>
      <li>sss233</li>
      <li>sss234</li>
      <li>sss235</li>
      <li>sss236</li>
      <li>sss237</li>
      <li>sss238</li>
      <li>sss239</li>
      <li>sss240</li>
      <li>sss241</li>
      <li>sss242</li>
      <li>sss243</li>
      <li>sss244</li>
      <li>sss245</li>
      <li>sss246</li>
      <li>sss273</li>
      <li>sss274</li>
      <li>sss275</li>
      <li>sss276</li>
      <li>sss277</li>
      <li>sss278</li>
      <li>sss279</li>
      <li>sss280</li>
      <li>sss281</li>
      <li>sss282</li>
      <li>sss283</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
export default {
  name: 'Category',
  components: {},
  props: {},
  data () {
    return {
      scroll: null
    };
  },
  computed: {
  },
  watch: {},
  created () {
  },
  mounted () {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true
    })

    this.scroll.on('scroll', (position) => {
      console.log(position)
    })

    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })

  },
  methods: {}
};
</script>

<style  scoped>
.wrapper {
  height: 150px;
  background-color: red;
}
</style>