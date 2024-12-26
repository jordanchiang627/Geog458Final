var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYWNoZW4xMjM0IiwiYSI6ImNtMWpsY2dqMzB6cHoyaW9ncnRrOGl1Z2cifQ.QM6F1ahWA0eQJPt2aFwsjw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Global Carbon Footprints: A Deep Dive into Emissions and Population Density',
    subtitle: 'Exploring How Different Countries Contribute to Carbon Emissions and What They’re Doing to Combat the Crisis',
    byline: 'By Jordan Chiang and Alex Chen',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Carbon Emissions',
            image: 'https://images.newscientist.com/wp-content/uploads/2024/10/24133338/SEI_226912852.jpg',
            description: 'Currently, the world population sits around 8.2 billion people. Due to advances in living conditions and healthy technology the population has quadrupled since 1800. This explosion in people has increased the demand for energy, mainly through the burning of fossil fuels. This burning of fossil fuels has led to a massive increase in world carbon emissions. The aim of this story map is to display countries with high and low carbon emissions per capita and how each nation is combating or enabling such emissions through the density of their populations. “Per capita” was selected as the unit of measurement to ensure that smaller populated countries were not overshadowed. Comparisons for each mentioned nation will be displayed in comparison to their population and emissions over time. The goal is to explore any solutions that individual countries can implement that will help reduce carbon emissions. Data was collected from ourworldindata.org and is based on 2023 statistics.',
            location: {
                center: [37.80999, 21.86786],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'South Korea',
            image: 'https://icapcarbonaction.com/system/files/styles/twitter_image/private/image/korea_clark-gu-axsvncqs6ak-unsplash.jpg?itok=wwoctZEa',
            description: 'South Korea, spanning just 100,000 square kilometers and ranking 109th in landmass, has one of the highest CO2 emissions per capita at 11.2 tonnes. With a population density of 532 people per square kilometer, such high per capita emissions may seem unexpected, as dense populations often experience lower individual emissions. However, several factors drive South Korea’s elevated carbon footprint. Despite its advanced public transportation system, many citizens rely on private vehicles, leading to traffic congestion and increased fossil fuel consumption. Additionally, as one of the world’s most technologically advanced societies, South Koreas high energy demand for electronics and technology contributes significantly to emissions. Its consumer-driven economy, marked by high consumption of products like electronics, fashion, and home goods, further exacerbates emissions due to the energy-intensive production, transportation, and disposal processes. Rapid urbanization over recent decades has also played a major role. The demand for urban infrastructure—such as highways, bridges, and apartment complexes—has driven the production of steel and concrete, both of which are highly carbon-intensive materials, leaving a lasting impact on the country’s emissions.',
            location: {
                center: [127.89806, 36.55404],
                zoom: 6.05,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Philippines',
            image: 'https://www.investopedia.com/thmb/zIUhlrNOkicpjeZTh87tMmFzvkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/manila-4503501_1920-7d778f7dd46840eea467937098242700.jpg',
            description: 'The Philippines, like South Korea, has a small landmass and high population density, but its carbon emissions are much lower, averaging just 1.2 metric tonnes per person—well below the global average of 4.5 metric tonnes. While the Philippines lacks the advanced public transportation systems of more developed nations, its reliance on shared modes of transport like jeepneys, buses, and motorized tricycles keeps emissions lower. The high passenger-to-vehicle ratio, reduced vehicle demand due to shared transportation, and lower energy consumption all contribute to this. Sustainable practices such as walking and biking for short trips further benefit the countrys carbon footprint. Despite a growing economy, the Philippines has a relatively low energy demand compared to industrialized nations, with 29% of its electricity coming from renewable sources. This reduces reliance on fossil fuels and supports cleaner energy production. Community-driven solutions also play a role in minimizing emissions. Urban farming and shared resources reduce the energy required for food transportation and overall consumption. Additionally, government initiatives promoting solar, wind, and geothermal energy have facilitated the development of renewable infrastructure, particularly in densely populated areas with high energy needs.',
            location: {
                center: [122.06062, 11.52024],  // Coordinates of Los Angeles
                zoom: 4.48,  // Adjust to fit the polygon
                pitch: 0.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
            
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Line Graph of Soth Korea and Philippines per Capita Emissions since 1900',
            image: 'co-emissions-per-capita.png',
            description: '<p>South Korea: The country’s economic boom in the late 20th century came with little environmental regulation, allowing industries to grow unchecked and establishing a high-emissions economy. Today, these industries often lobby against green policies, fearing increased costs, which slows progress in reducing emissions.</p><p>Philippines: Despite rising per capita emissions from increased industrialization and energy demands since the 1940s, the Philippines has managed to maintain relatively low carbon emissions per person. The high cost of importing fossil fuels prompted the country to embrace renewable energy, making it a global leader in geothermal energy use. This commitment was solidified with the Renewable Energy Act of 2008, which prioritized renewable sources like wind, hydro, and solar. Additional environmental legislation, such as the Forestry Code of 1975 and the Philippine Clean Air Act of 1999, has further supported efforts to limit carbon emissions and promote sustainable practices.</p>',
            location: {
                center: [-55.75490, -10.21922],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Asian Peninsula',
            image: '',
            description: 'When going back to the world outlook, it becomes clear that nations with lower per capita carbon emissions, like the Philippines offer valuable lessons in sustainable practices. However, having other countries replicate that success is much more challenging, especially given their differences in economic structure, political system, and/or resource availability. Key strategies, such as enforcing stricter environmental laws, and fostering public awareness, could help reduce emissions depending on the country. Other nations could take inspiration from the Philippines by prioritizing investments in renewable energy sources and promoting community-based transportation systems. Emphasizing shared transit options and sustainable energy practices can help reduce reliance on fossil fuels and lower carbon emissions globally. By balancing economic growth with environmental awareness, high-emission countries like South Korea can reduce their carbon footprint while still maintaining prosperity.',
            location: {
                center: [116.18320, 27.46478],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
