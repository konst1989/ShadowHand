import React, { useEffect, useState } from "react";
import * as joint from "jointjs";

const GraphEditor = () => {
    const [graph, setGraph] = useState(new joint.dia.Graph());

    useEffect(() => {
        const newPaper = new joint.dia.Paper({
            el: document.getElementById("graph-container"),
            model: graph,
            width: 800,
            height: 500,
            gridSize: 10,
            interactive: true,
            defaultLink: new joint.shapes.standard.Link(),
        });
    }, [graph]);

    return (
        <div>
            <h2>ShadowHand - Тестовый редактор</h2>
            <div id="graph-container" style={{ border: "1px solid #ccc", marginTop: "10px" }}></div>
        </div>
    );
};

export default GraphEditor;