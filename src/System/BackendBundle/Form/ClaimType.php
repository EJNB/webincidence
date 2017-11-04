<?php

namespace System\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class ClaimType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('claimDate',DateType::class,array(
                'label' => 'Fecha',
                'widget' => 'single_text',
                'attr' => array('class' => 'format_date_time'),
                'required' => true,
                'input' => 'datetime',
            ))
//            ->add('incidences',EntityType::class,array(
//                'class'=>'System\BackendBundle\Entity\Incidence',
//                'choices_as_values' => true,
//                'expanded' => true,
//                'multiple' => true,
//                'attr' => array(
//                    'class' => 'icheck'
//                ),
//                'choice_attr' => function($val, $key, $index) {
//                    // adds a class like attending_yes, attending_no, etc
//                    return ['class' => 'attending_'.strtolower($key)];
//                },
////                'label_format' => 'form.address.%name%'
//            ))
            ->add('closingDate',DateType::class,array(
                'label' => 'Fecha del cierre',
                'widget' => 'single_text',
                'attr' => array('class' => 'format_date_time'),
                'required' => true,
                'input' => 'datetime',
            ))
//            ->add('requestAmount')
//            ->add('requestReturned')
            ->add('personsAmount',IntegerType::class,array(
                'label' => 'Cantidad de personas'
            ))
            ->add('state',ChoiceType::class,array(
                'choices_as_values' => true,
                'choices'=>array(
                    'Hecho' => 'Hecho',
                    'En proceso' => 'En proceso',
                    'Abierto' => 'Abierto',
                ),
                'expanded' => true,
                'multiple' => false,
                'attr' => array(
                    'class' => 'icheck'
                ),
                'label' => 'Estado',
                'label_attr' => array(
                    'class' => 'label-incidence'
                )
            ))
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'System\BackendBundle\Entity\Claim'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'system_backendbundle_claim';
    }


}
