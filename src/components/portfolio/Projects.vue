<template>
    <section class="dty--projects">
        <div class="dty--wrapper">
            <ul class="dpts--title">
                <li><span class="active" @click="handleAllFilterClick">All Projects</span></li>
                <li><span @click="handleFilterClick('logos')">Logos</span></li>
                <li><span @click="handleFilterClick('app-design')">App Design</span></li>
                <li><span @click="handleFilterClick('web-design')">Web Design</span></li>
                <li><span @click="handleFilterClick('banners')">Banners</span></li>
                <li><span @click="handleFilterClick('illustrations')">Illustrations</span></li>
            </ul>

            <ul class="dty-project--grid">

                <li class="project--item animateds"
                    v-for="item in daintyProjects"
                    :key="item.key"
                    :class="[{iVisible: item.visible, flipOutY: !item.visible, flipInY: item.visible}, item.gridType]"
                    @click="showItemOnModal (item)">

                    <img :src="require(`../../assets/portfolio/${item.image}`)" :alt="item.name" />
                    <div class="hover">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
    <div v-if="showModal">
        <PortfolioModal :item="showOnModal" @close="closePortfolioModal" />
    </div>
</template>

<script>

    import PortfolioModal from './PortfolioModal.vue';

  export default {
    name: 'Projects',

    components: { PortfolioModal },

    data () {
        return {
            showOnModal : [],
            showModal: false,
            daintyProjects : [
                {
                    key: '01',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '01.jpg',
                    type: 'illustrations',
                    visible: true
                },
                {
                    key: '02',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '02.jpg',
                    type: 'app-design',
                    visible: true,
                    gridType: 'pi--height'
                },
                {
                    key: '03',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '03.jpg',
                    type: 'logos',
                    visible: true
                },
                {
                    key: '04',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '04.jpg',
                    type: 'banners',
                    visible: true
                },
                {
                    key: '05',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '05.jpg',
                    type: 'illustrations',
                    visible: true,
                    gridType: 'pi--height'
                },
                {
                    key: '06',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '06.jpg',
                    type: 'logos',
                    visible: true
                },
                {
                    key: '07',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '07.jpg',
                    type: 'app-design',
                    visible: true,
                    gridType: 'pi--width'
                },
                {
                    key: '08',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '08.jpg',
                    type: 'logos',
                    visible: true,
                    gridType: 'pi--width'
                },
                {
                    key: '09',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '09.jpg',
                    type: 'illustrations',
                    visible: true,
                    gridType: 'pi--height'
                },
                {
                    key: '10',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '10.jpg',
                    type: 'banners',
                    visible: true
                },
                {
                    key: '11',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '11.jpg',
                    type: 'web-design',
                    visible: true,
                    gridType: 'pi--height'
                },
                {
                    key: '12',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '12.jpg',
                    type: 'app-design',
                    visible: true
                },
                {
                    key: '13',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '13.jpg',
                    type: 'web-design',
                    visible: true
                },
                {
                    key: '14',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '14.jpg',
                    type: 'logos',
                    visible: true
                },
                {
                    key: '15',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '15.jpg',
                    type: 'logos',
                    visible: true
                },
                {
                    key: '16',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '16.jpg',
                    type: 'banners',
                    visible: true,
                    gridType: 'pi--width'
                },
                {
                    key: '17',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '17.jpg',
                    type: 'web-design',
                    visible: true
                },
                {
                    key: '18',
                    name : 'Project Name',
                    description : 'Description goes here!',
                    image: '18.jpg',
                    type: 'banners',
                    visible: true
                }
            ]
        }
    },

    methods: {

        handleFilterClick (type) {
            this.daintyProjects.map(item => {
                if (item.type != type) {
                    item.visible = false;
                }else {
                    item.visible = true;
                }
            });
        },

        handleAllFilterClick () {
            this.daintyProjects.map(item => {
                item.visible = true;
            });
        },

        showItemOnModal (project) {
            this.showOnModal = project;
            this.showModal = true;
        },

        closePortfolioModal () {
            this.showModal = false;
        }
    }


  }

</script>

<style>

.dty--projects {padding: 5px 0;overflow: hidden;}
ul.dpts--title {display: flex;align-items: stretch;width: 75%;margin: 35px auto;height: auto;}
ul.dpts--title > li {text-align: center;flex-grow: 1;height: auto;padding: 10px;}
ul.dpts--title > li > span {display: inline-block;width: auto;padding: 10px 30px;background-color: #f6f6f8;border: 1px solid #e2e2e2;border-radius: 45px;font-size: 10pt;cursor: pointer;font-weight: 500;-webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.28, 1);transition: all 0.3s cubic-bezier(0.55, 0, 0.28, 1);}

ul.dpts--title > li > span:hover {background-color: #2196f3;border: 1px solid #1479ca;color: #fff; cursor: pointer;}
ul.dpts--title > li > span.active {background-color: #2196f3;border: 1px solid #1479ca;color: #fff;}

/* grid design goes here */
ul.dty-project--grid {display: grid;grid-gap: 15px;grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));grid-auto-rows: 200px; padding-bottom: 75px;}
ul.dty-project--grid li.project--item {display: none;overflow: hidden;background: #fff;cursor: pointer;border: 1px solid #e2e2e2; position:relative;}
ul.dty-project--grid li.project--item a {width: 100%;height: 100%; }
ul.dty-project--grid li.project--item img {width: 100%;height: 100%;object-fit: cover; -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.28, 1);transition: all 0.5s cubic-bezier(0.55, 0, 0.28, 1);}

ul.dty-project--grid li.project--item.pi--width {grid-column-end: span 2; }
ul.dty-project--grid li.project--item.pi--height {grid-row-end: span 2; }
ul.dty-project--grid li.project--item.iVisible {display: grid; }
ul.dty-project--grid li.project--item .hover {width: 100%;height: 45px;position: absolute;bottom: -75px;background-color: #2196f3;border-top: 5px solid #1479ca;text-align: center;
color: #fff;padding: 10px 0;padding-bottom: 15px;-webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.28, 1);transition: all 0.5s cubic-bezier(0.55, 0, 0.28, 1);}

ul.dty-project--grid li.project--item .hover h3 {padding: 0px;line-height: 20pt;font-size: 12pt;text-transform: uppercase;letter-spacing: 0.25px;}
ul.dty-project--grid li.project--item .hover p {margin: 0px;line-height: 13pt;font-size: 10pt;letter-spacing: 0.35px;}
ul.dty-project--grid li.project--item:hover {border: 1px solid #1479ca;}
ul.dty-project--grid li.project--item:hover .hover {bottom: 0;}
ul.dty-project--grid li.project--item:hover img {opacity: 0.4;width: 105%;height: 105%;margin-left: -2.5%; margin-top: -2.5%;}

</style>
