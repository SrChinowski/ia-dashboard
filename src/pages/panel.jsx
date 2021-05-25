import React from 'react';
import { Grid, Divider} from "@material-ui/core";
import PanelCards from '../components/PanelPage/panelCards';
import PanelBarChart from '../components/PanelPage/panelBarChart';

const dataCards = [
    {
        icon: "FastfoodIcon",
        data: "145",
        title: "Platillos Servidos",
        value: "75%",
        color: "pink"
    },
    {
        icon: "TimerIcon",
        data: "32",
        title: "Servicios",
        value: "30%",
        color: "blue"
    },
    {
        icon: "AttachMoneyIcon",
        data: "$30,000",
        title: "Ganancias",
        value: "50%",
        color: "yellow"
    },
    {
        icon: "PersonPinIcon",
        data: "10",
        title: "Nuevos Clientes",
        value: "15%",
        color: "red"
    },
]

const dataChart = [
    {
      "country": "AD",
      "hot dog": 52,
      "hot dogColor": "hsl(235, 70%, 50%)",
      "burger": 55,
      "burgerColor": "hsl(228, 70%, 50%)",
      "sandwich": 23,
      "sandwichColor": "hsl(342, 70%, 50%)",
      "kebab": 3,
      "kebabColor": "hsl(135, 70%, 50%)",
      "fries": 126,
      "friesColor": "hsl(237, 70%, 50%)",
      "donut": 0,
      "donutColor": "hsl(162, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 184,
      "hot dogColor": "hsl(62, 70%, 50%)",
      "burger": 84,
      "burgerColor": "hsl(287, 70%, 50%)",
      "sandwich": 92,
      "sandwichColor": "hsl(304, 70%, 50%)",
      "kebab": 56,
      "kebabColor": "hsl(193, 70%, 50%)",
      "fries": 40,
      "friesColor": "hsl(90, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(23, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 116,
      "hot dogColor": "hsl(65, 70%, 50%)",
      "burger": 19,
      "burgerColor": "hsl(132, 70%, 50%)",
      "sandwich": 78,
      "sandwichColor": "hsl(340, 70%, 50%)",
      "kebab": 110,
      "kebabColor": "hsl(123, 70%, 50%)",
      "fries": 130,
      "friesColor": "hsl(228, 70%, 50%)",
      "donut": 57,
      "donutColor": "hsl(207, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 100,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "burger": 174,
      "burgerColor": "hsl(105, 70%, 50%)",
      "sandwich": 20,
      "sandwichColor": "hsl(343, 70%, 50%)",
      "kebab": 160,
      "kebabColor": "hsl(107, 70%, 50%)",
      "fries": 175,
      "friesColor": "hsl(312, 70%, 50%)",
      "donut": 17,
      "donutColor": "hsl(67, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 62,
      "hot dogColor": "hsl(148, 70%, 50%)",
      "burger": 107,
      "burgerColor": "hsl(149, 70%, 50%)",
      "sandwich": 193,
      "sandwichColor": "hsl(234, 70%, 50%)",
      "kebab": 135,
      "kebabColor": "hsl(209, 70%, 50%)",
      "fries": 113,
      "friesColor": "hsl(76, 70%, 50%)",
      "donut": 48,
      "donutColor": "hsl(76, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 69,
      "hot dogColor": "hsl(359, 70%, 50%)",
      "burger": 127,
      "burgerColor": "hsl(280, 70%, 50%)",
      "sandwich": 134,
      "sandwichColor": "hsl(228, 70%, 50%)",
      "kebab": 16,
      "kebabColor": "hsl(111, 70%, 50%)",
      "fries": 75,
      "friesColor": "hsl(142, 70%, 50%)",
      "donut": 172,
      "donutColor": "hsl(301, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 1,
      "hot dogColor": "hsl(77, 70%, 50%)",
      "burger": 80,
      "burgerColor": "hsl(136, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(236, 70%, 50%)",
      "kebab": 153,
      "kebabColor": "hsl(63, 70%, 50%)",
      "fries": 105,
      "friesColor": "hsl(44, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(315, 70%, 50%)"
    }
  ]

const Panel = () => {

    return ( 
        <Grid xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="text-3xl mb-3 font-medium" style={{color: "#5F5F5F"}}>Dashboard</div>
                <Divider style={{ width: "100%" }}></Divider>

                <section className="lg:flex lg:flex-wrap lg:space-x-8 space-y-3 mb-3">
                    {
                        dataCards.map(
                            data => <PanelCards data={data}></PanelCards>
                        )
                    }
                </section>

                <PanelBarChart data={dataChart} title="Popularidad de Platillos"/>
            </Grid>
        </Grid>
     );
}
 
export default Panel;