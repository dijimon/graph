import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import s from './styles.css';

import {fetchGraphData} from "@redux/actions";
import {saveGraphParams} from "@redux/actions";
import {getRandomColor} from "@/utils/helpers";

const Graph = (props) => {
    const [graphArea, setGraphArea] = useState(null);
    const [state, setState] = useState({
        from: props.graphParams.from,
        to: props.graphParams.to,
        step: props.graphParams.step
    });

    useEffect(() => {
        setGraphArea(JXG.JSXGraph.initBoard('box', {boundingbox: [props.graphParams.from, props.graphParams.to, props.graphParams.to, props.graphParams.from], axis: true}));
        if(!props.fetchedGraphData.length) {
            props.fetchGraphData();
        }
    }, [props.graphParams]);

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = Number(state.from);
        const to = Number(state.to);
        const step = Number(state.step);

        props.fetchGraphData({from, to, step});
        props.saveGraphParams({from, to, step});
    };

    return (
        <div className={s.graph}>
            <form onSubmit={handleSubmit} className={s.form}>
                <div>
                    <label>From:</label>
                    <input name="from" type="text" value={state.from} onChange={handleChange} />
                </div>
                <div>
                    <label>To:</label>
                    <input name="to" type="text" value={state.to} onChange={handleChange} />
                </div>
                <div>
                    <label>Step:</label>
                    <input name="step" type="text" value={state.step} onChange={handleChange} />
                </div>
                <div>
                    <label>&nbsp;</label>
                    <input type="submit" value="Draw" />
                </div>
            </form>
            {(() => {
                graphArea && props.fetchedGraphData.data && props.fetchedGraphData.data.forEach(item => {
                    graphArea.create('curve', [item.x, item.y],{strokeColor:getRandomColor(), strokeWidth:2});
                });
            })()
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        fetchedGraphData: state.graphs.fetchedGraphData,
        graphParams: state.graphs.graphParams,
        loading: state.app.loading,
    };
};

const mapDispatchToProps = {
    fetchGraphData: fetchGraphData,
    saveGraphParams: saveGraphParams
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
