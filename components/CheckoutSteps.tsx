'use client';

interface CheckoutStepsProps {
  currentStep: 'cart' | 'review' | 'checkout' | 'confirmation';
}

const steps: Array<{ key: CheckoutStepsProps['currentStep']; label: string }> = [
  { key: 'cart', label: 'Panier' },
  { key: 'review', label: 'Revue' },
  { key: 'checkout', label: 'Commande' },
];

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <ol className="flex items-center gap-4 sm:gap-6 text-sm font-medium flex-wrap">
      {steps.map((step, index) => {
        const isCompleted = steps.findIndex((s) => s.key === currentStep) > index;
        const isActive = step.key === currentStep;
        const circleClasses = [
          'w-8 h-8 mr-3 rounded-full flex items-center justify-center border-2',
          isActive ? 'border-primary text-primary' : '',
          isCompleted ? 'border-primary bg-primary text-white' : '',
          !isActive && !isCompleted ? 'border-gray-300 text-gray-400' : '',
        ]
          .filter(Boolean)
          .join(' ');
        const labelClasses = isActive ? 'text-primary' : 'text-gray-500';
        return (
          <li key={step.key} className="flex items-center">
            <span className={circleClasses}>
              {isCompleted ? '✓' : index + 1}
            </span>
            <span className={labelClasses}>{step.label}</span>
            {index < steps.length - 1 && <span className="mx-4 h-px w-10 bg-gray-200" />}
          </li>
        );
      })}
    </ol>
  );
}
