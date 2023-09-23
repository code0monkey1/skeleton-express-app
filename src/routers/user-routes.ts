import { Router } from 'express';

export default (router: Router): void => {
  router.get('/users', () => {});

  router.get('/users/:id', () => {});

  router.post('/users', () => {});

  router.put('/users/:id', () => {});

  router.delete('/users/:id', () => {});
};
