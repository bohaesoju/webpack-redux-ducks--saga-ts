import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";
import { requestInfo } from "../reducers/Info";

export interface info {
    Info: any
}

class InfoWrap extends React.Component<info> {
    handleGetInfo() {
        const { onRequestInfo }: any = this.props;
        onRequestInfo()
    }
    render(): JSX.Element{
        const { Info } = this.props;
        return (
            <React.Fragment>
                <button onClick={() => this.handleGetInfo()}>GetInfo</button>
                <div>{Info.data.title && Info.data.title}</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log('mapStateProps: ', state);
    return {
        Info: state.Info
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onRequestInfo: bindActionCreators(requestInfo, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoWrap);
