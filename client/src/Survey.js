import React from 'react'
import './Survey.css';

function Survey() {
    return (
        <main>
            <div>
                <h1>
                    Survey
                </h1>
            </div>
            <div>
                <form>
                    <h2>As we do not have questions written out at this time, please enjoy
                        some complimentary sample survey questions</h2> <br></br>
                    <h3>Here are some radio buttons:</h3>
                    <input type="radio" id="rex1" name="example_radio" value="REX1" />
                    <label for="rex1">Excellent!</label><br></br>
                    <input type="radio" id="rex2" name="example_radio" value="REX2" />
                    <label for="rex2">Could be better...</label><br></br>
                    <input type="radio" id="rex3" name="example_radio" value="REX3" />
                    <label for="rex3">No comment</label><br></br>

                    <h3>Write whatever is desired</h3>
                    <input type="text" id="tex" name="example_text" />

                    <h3>Here are some checkboxes</h3>
                    <input type="checkbox" id="cex1" name="cex1" value="CEX1" />
                    <label for="cex1">Selection 1</label><br></br>
                    <input type="checkbox" id="cex2" name="cex2" value="CEX2" />
                    <label for="cex2">Selection 2</label><br></br>
                    <input type="checkbox" id="cex3" name="cex3" value="CEX3" />
                    <label for="cex3">Selection 3</label><br></br>

                    <br></br><button type="submit">Submit Answers</button>
                </form>
            </div>
            
        </main>
    )
}

export default Survey