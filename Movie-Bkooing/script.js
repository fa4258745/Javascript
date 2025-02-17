const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset:true,
  });
  
  sr.reveal(`.scroll-left`,
    {
      origin: 'left',
      interval: 100,
    }
  );
  
  sr.reveal(`.scroll-right,`,
    {
      origin: 'right',
      interval: 100,
    }
  );
  sr.reveal(`.scroll-top`,
    {
      origin: 'top',
      interval: 100,
    }
  );
  sr.reveal(`.scroll-bottom,.login-container`,
    {
      origin: 'bottom',
      interval: 100,
    }
  );
  