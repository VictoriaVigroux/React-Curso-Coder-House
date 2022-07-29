const NavBar = () => {
  return <div>Tienda Online</div>;
};

return (
  <Container>
    <Logo src="" />
    <Navegacion>
      <ItemsNavegacion>
        <Links to="/">Inicio</Links>
      </ItemsNavegacion>
      <ItemsNavegacion>
        <Links to="/">Productos</Links>
      </ItemsNavegacion>
      <ItemsNavegacion>
        <Links to="/">Contacto</Links>
      </ItemsNavegacion>
      <ItemsNavegacion>
        <Links to="/">Comprar</Links>
      </ItemsNavegacion>
    </Navegacion>
    <RightSide>
      <p>Email</p>
      <CartWidget state={state} setMenu={setMenu} menu={menu} />
      {menu && <MenuCarrito />}
    </RightSide>
  </Container>
);

export default NavBar;
