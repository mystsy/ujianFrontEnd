import React from 'react';

const List = props =>
    <div className="list">

            <div class="row">
                <div class="col-xs-12">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            {`${props.strPlayer} (${props.strPosition})`}
                        </div>
                        <div class="panel-body">
                            <img src={props.strThumb} alt={props.strPlayer}/>
                            <p>{props.strDescriptionEN}</p>
                        </div>
                    </div>
                </div>
             </div>
    </div>

export default List;