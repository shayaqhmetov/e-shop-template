import React from "react";

import "./directory.styles.scss";
import { directories } from "./directory.data";
import MenuItem from "../menu-item/menu-item.template";

export default class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            directories
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.directories.map(directory =>
                    <MenuItem key={directory.id} title={directory.title} imageUrl={directory.imageUrl} size={directory.size}/>
                )}
            </div>
        );
    }
}
