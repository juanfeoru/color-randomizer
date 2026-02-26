import HistoryHeader from './HistoryHeader';
import HistoryItem from './HistoryItem';
import type { HexColor } from '../../../types/color.types';

type Props = {
  history: HexColor[];
  clearHistory: () => void;
};

export default function ColorHistorySection({ history, clearHistory }: Props) {
  return (
    <section className='w-full max-w-200 flex flex-col gap-6 mt-8'>
      <HistoryHeader clearHistory={clearHistory} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {history.map((history, index) => (
          <HistoryItem
            key={index}
            color={history.hex}
            time={history.generatedAt}
          />
        ))}
      </div>
    </section>
  );
}
