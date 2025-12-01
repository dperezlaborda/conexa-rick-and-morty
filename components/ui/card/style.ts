import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-[#8ED959]/20 shadow-[0_8px_32px_0_rgba(142,217,89,0.1)]',
  {
    variants: {
      variant: {
        default: '',
        horizontal: '',
      },
      size: {
        default: 'xl:w-[180px] 2xl:w-full h-full w-full',
        sm: 'w-full',
      },
      clickable: {
        true: 'cursor-pointer transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(142,217,89,0.25)] hover:border-[#8ED959]/40',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      clickable: true,
    },
  }
);

export const cardBadgeVariants = cva('border rounded-lg px-2 capitalize', {
  variants: {
    variant: {
      alive: 'bg-green-500/20 text-green-300 border-green-500/50',
      dead: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      unknown: 'bg-gray-500/20 text-gray-300 border-gray-500/50',
    },
  },
});
