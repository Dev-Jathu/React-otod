import './Note.css'
import Form from '../../Form/Form'
import Button from '../../Button/Button'

export default function Notepage(){
    return(
        <div className='Notecontainer'>
            <table border={1}>
                <tr>
                    <th>Note_Number</th>
                    <th> Title</th>
                    <th>Created_By </th>
                    <th>Created_On </th>
                    <th> Content</th>
                    <th> Edit</th>
                    <th> Delete</th>
                </tr>
                <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr> <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr> <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr> <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                <tr>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Form input='tabledata' place='Type'/></td>
                    <td><Button class='edit' name="Edit"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
            </table>
        </div>
    )
}