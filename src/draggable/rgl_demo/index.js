import React from "react";
import _ from "lodash";
import {Responsive, WidthProvider} from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DragFromOutsideLayout extends React.Component {
    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function () {
        },
        cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    };

    /**
     * @type {{currentBreakpoint: string（当前断点类型）, compactType: string, layouts: {lg: ValidationOptions.unknown[]}}}
     */
    state = {
        currentBreakpoint: "lg",
        compactType: "vertical",
        layouts: {lg: generateLayout()}
    };

    /**
     * 生成匹配layout的DOM
     * @returns {unknown[]}
     */
    generateDOM() {
        return _.map(this.state.layouts.lg, function (item, index) {
            return (
                <div key={index} style={{backgroundColor: 'red'}} className={item.static ? "static" : ""}>
                    {
                        item.static ? (
                            <span className="text"
                                  title="This item is static and cannot be removed or resized">Static - {index}</span>
                        ) : (
                            <span className="text">{index}</span>
                        )
                    }
                </div>
            )
        })
    }

    /**
     * 页面自适应触发断点的回调
     * @param breakpoint：断点类型
     */
    onBreakpointChange = breakpoint => {
        this.setState({
            currentBreakpoint: breakpoint
        });
    };

    //更改压缩类型
    onCompactTypeChange = () => {
        const {compactType: oldCompactType} = this.state;
        const compactType =
            oldCompactType === "horizontal"
                ? "vertical"
                : oldCompactType === "vertical"
                ? null
                : "horizontal";
        this.setState({compactType});
    };

    //用来保存布局的回调，每次 drag 或者 resize 结束之后返回当前的布局
    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
    };

    //随机生成新的layout
    onNewLayout = () => {
        this.setState({
            layouts: {lg: generateLayout()}
        });
    };

    //释放到栅格
    onDrop = (layout, layoutItem, _event) => {
        alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
    };

    render() {
        return (
            <div>
                <div>
                    当前断点: {this.state.currentBreakpoint} (
                    {this.props.cols[this.state.currentBreakpoint]} columns)
                </div>
                <div>
                    压缩类型:{" "}
                    {_.capitalize(this.state.compactType) || "No Compaction"}
                </div>
                <button onClick={this.onNewLayout}>洗牌</button>
                <button onClick={this.onCompactTypeChange}>
                    更改压缩类型
                </button>
                <div
                    className="droppable-element"
                    style={{
                        width: 150,
                        textAlign: 'center',
                        backgroundColor: '#fdd',
                        border: '1px solid black',
                        margin: '10px 0',
                        padding: 10
                    }}
                    draggable={true}
                    unselectable="on"
                    // this is a hack for firefox
                    // Firefox requires some kind of initialization
                    // which we can do by adding this attribute
                    // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                    onDragStart={e => e.dataTransfer.setData("text/plain", "")}
                >
                    Droppable Element (Drag me!)
                </div>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}   //页面大小从一个断点区间过渡到另一个区间的时候触发
                    onLayoutChange={this.onLayoutChange}     //用来保存布局的回调，每次 drag 或者 resize 结束之后返回当前的布局
                    onDrop={this.onDrop}
                    // WidthProvider option
                    measureBeforeMount={false}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                    isDroppable={true}
                >
                    {this.generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

/**
 * 生成布局
 * 随机生成25块的layout对象
 * @returns {unknown[]}
 */
function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        const y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: Math.round(Math.random() * 5) * 2,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}

// if (process.env.STATIC_EXAMPLES === true) {
//     import("../test-hook.jsx").then(fn => fn.default(DragFromOutsideLayout));
// }