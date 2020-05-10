import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
});
