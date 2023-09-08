import { useEffect, useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import { BreathColors } from "../../../constants/ColorsConst";
import { useTheme } from "../../../providers/theme/ThemeContext";

const PieChart = ({dataInput, totalVotes})=> {

    const {theme} = useTheme();

    const [active, setActive] = useState(null);
    const width = 400;
    const half = width / 2;

    const [data, setData] = useState(0);

    useEffect(()=>{
        const keys = Object.keys(BreathColors);

        setData(dataInput.map((answer,i)=>{
            return{...answer, color: BreathColors[keys[i]][theme]}
        }))
    },[dataInput])


    return (
        <main>
            {data?
            
            <svg width={width} height={width}>
                <Group top={half} left={half}>
                <Pie
                    data={data}
                    pieValue={(data) => data.votes}
                    outerRadius={half}
                    innerRadius={({ data }) => {
                    const size = active && data.name === active.name ? 68 : 50;
                    return half - size;
                    }}
                    cornerRadius={10}
                    padAngle={0.04}
                >
                    {(pie) => {
                    return pie.arcs.map((arc) => {
                        const [centroidX, centroidY] = pie.path.centroid(arc);
                        return (
                        <g
                            key={arc.data.name}
                            onMouseEnter={() => setActive(arc.data)}
                            onMouseLeave={() => setActive(null)}
                            style={{ cursor: "pointer" }}
                        >
                            <path d={pie.path(arc)}
                                fill={arc.data?.color}
                                >

                            </path>
                            <Text
                            fill="white"
                            x={centroidX}
                            y={centroidY}
                            dy=".33em"
                            fontSize={15}
                            textAnchor="middle"
                            pointerEvents="none"
                            >
                            {arc.data.symbol}
                            </Text>
                        </g>
                        );
                    });
                    }}
                </Pie>

    
                    <Text textAnchor="middle" fill={active ? active.color : `var(--pastel-blue)`} fontWeight={600} fontSize={'2.5rem'} dy={0}>
                        {active ? active.votes : `${totalVotes} votes`}
                    </Text>
                    <Text
                    textAnchor="middle"
                    fill={active ? active.color : `var(--text-terciary)`}
                    fontSize={20}
                    dy={90}
                    width={width/3}
                >
                    {active ? active.name :`${data.length} options`}
                </Text>
                
                </Group>

                
            </svg>
            :""
            }
        </main>
    );
}

export default PieChart;