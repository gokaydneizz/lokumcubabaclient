import React from 'react';
import Navbarr from '../../components/navbar/Navbar';
import Table from 'react-bootstrap/Table';
import useFetch from '../../hooks/useFetch';
const Adminapplication = () => {
  const {data, loading, error} = useFetch(`/admin/application`);
  console.log(data);

  return (
    <div>
      <Navbarr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>İsim Soy İsim</th>
            <th>TC Kimlik</th>
            <th>Adres</th>
            <th>Telefon Numarası</th>
            <th>E-mail</th>
            <th>Doğum tarihi</th>
            <th>Perakende ticareti ile uğraştınız mı?</th>
            <th>Bizi Tercih Etmenizin Sebebi Nedir ?</th>
            <th>
              Hangi il/ilçe/semt için Lokumcu Baba işletmeciliği düşünüyorsunuz?
            </th>
            <th>Yatırım miktarınız nedir?(TL)</th>
            <th>Eklemek istediğiniz bir şey var mı ?</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.nameSurname}</td>
              <td>{item.identity}</td>
              <td>{item.address}</td>
              <td>{item.telephoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.birthDay}</td>
              <td>{item.experience}</td>
              <td>{item.reason}</td>
              <td>{item.where}</td>
              <td>{item.amountOfInvestment}TL</td>
              <td>{item.anythingMore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Adminapplication;
