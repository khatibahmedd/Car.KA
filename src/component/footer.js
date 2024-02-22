import'./footer.css'
import fac from './photo/f.png';
import y from './photo/y (1).png';
import inst from './photo/ins.png';
import linkd from './photo/lin.png';



function Footer(){
    
    return(
<div className="footer">
<div id='one'>
    <img src={fac}></img>
    <img src={y}></img>
    <img src={inst}></img>
    <img src={linkd}></img>
</div>
<div>
<table id='tab'>
    <tr>
        <th id='tt1'>#Topics</th>
        <th id='tt2'>#Car.KA</th>
        <th id='tt3'>#Services</th>
        
    </tr>
    <tr>
        <td id='t1'>Company</td>
        <td id='t2'>Car.Report</td>
        <td id='t3'>Contact</td>
        
    </tr>
    <tr>
        <td id='t1'>Innovation</td>
        <td id='t2'>Documents </td>
        <td id='t3'>Car.KA</td>
        
    </tr>
    <tr>
        <td id='t1'>Sustainability</td>
        <td id='t2'>Models</td>
        <td id='t3'>ALLNEW</td>
        
    </tr>
</table>
</div>
<hr id='hr' />
<div id='pq'>
    <p id='pq'>© AUDI AG. All rights reserved</p>
    <p id='pq'>Legal notice </p>
    <p id='pq'>Legal </p>
    <p id='pq'>Whistleblower System </p>
    <p id='pq'>Privacy Policy </p>
    <p id='pq'>Cookie Consent Options</p>
    <p id='pq'></p>
</div>

</div>



    )
}
export default Footer;